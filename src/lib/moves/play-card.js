// state
import boards from 'lib/state/boards';
import counts from 'lib/state/counts';
import energy from 'lib/state/energy';

// moves
import selectCard from 'lib/moves/select-card';

// enums & configs
import GAME_CONFIG from 'config/game.config';
import TYPE from 'enums/type.enums';

// utils
import copyCardToPlayedCards from 'lib/utils/copy-card-to-played-cards';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createMinionObject from 'lib/creators/create-minion-object';
import initCardMechanics from 'lib/mechanics/init-mechanics';
import playSpellByCardId from 'lib/spells/play-spell-card-by-id';
import playWeaponByCardId from 'lib/weapons/play-weapon-card-by-id';
import removeCardFromHand from 'lib/utils/remove-card-from-hand';
import playerCanAttack from 'lib/state/player-can-attack';

/**
 * Plays the provided card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 * @param {string} uuid
 * @param {string} cardId=null
 */
const playCard = (G, ctx, index, uuid, cardId = null) => {
  if (!cardId) return;

  const CARD_OBJ = createMinionObject(cardId);
  if (!CARD_OBJ) return;

  const SLOT_OBJ = createBoardSlotObject(cardId);
  if (!SLOT_OBJ) return;

  const { cost, type } = CARD_OBJ;
  switch (type) {
    case TYPE[1]:
      return playMinionCard(G, ctx, index, uuid, cardId, CARD_OBJ, SLOT_OBJ);

    case TYPE[3]:
      return playSpellCard(G, ctx, index, uuid, cardId, cost);

    case TYPE[4]:
      return playWeaponCard(G, ctx, uuid, cardId, cost);

    default:
      return;
  }
};

export const playMinionCard = (
  G,
  ctx,
  index,
  uuid,
  cardId,
  cardObj,
  boardObj
) => {
  const { currentPlayer } = ctx;
  const { cost } = cardObj;

  // subtract the card's cost from player's current energy count
  energy.subtract(G, currentPlayer, cost);

  // place card in selected index on your board
  boards.placeCardOnBoard(G, currentPlayer, boardObj, index);

  // move to your playerCards array
  copyCardToPlayedCards(G, currentPlayer, cardId);

  // and then remove card from your hand
  removeCardFromHand(G, currentPlayer, uuid);

  // then deincrement your hand count
  counts.deincrementHand(G, currentPlayer);

  // check and init and mechanics
  if (GAME_CONFIG.debugData.enableMechanics)
    initCardMechanics(G, ctx, cardObj, index);

  // reset selectedCardObject
  G.selectedCardIndex[currentPlayer] = null;
  G.selectedCardObject[currentPlayer] = null;
};

export const playSpellCard = (
  G,
  ctx,
  index,
  uuid,
  cardId,
  cardCost,
  target
) => {
  switch (index) {
    case 0:
      return playGlobalSpellCard(G, ctx, uuid, cardId, cardCost);

    default:
      break;
  }
};

export const playGlobalSpellCard = (G, ctx, uuid, cardId, cardCost) => {
  const { currentPlayer } = ctx;

  energy.subtract(G, currentPlayer, cardCost);
  playSpellByCardId(G, ctx, cardId);
  selectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, cardId);
  removeCardFromHand(G, currentPlayer, uuid);
  counts.deincrementHand(G, currentPlayer);
};

export const playWeaponCard = (G, ctx, uuid, cardId, cardCost) => {
  const { currentPlayer } = ctx;

  energy.subtract(G, currentPlayer, cardCost);
  playWeaponByCardId(G, currentPlayer, cardId);
  playerCanAttack.enable(G, currentPlayer);
  selectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, cardId);
  removeCardFromHand(G, currentPlayer, uuid);
  counts.deincrementHand(G, currentPlayer);
};

export default playCard;
