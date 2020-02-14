import { subtract } from 'mathjs';
import { generateMinion } from '../utils/generate-minion';
import { deincrementHandCount } from '../moves/card-moves';
import { initCardMechanics } from '../mechanics/init-mechanics';
import { generateBoardSlotObject } from '../utils/generate-board-slot';
import { setCurrentEnergy } from '../moves/energy-moves';
import { moveCardToPlayedCards } from './moveCardToPlayedCards';
import { removeCardFromHand } from './removeCardFromHand';
import { placeCardOnBoard } from '../boards/placeCardOnBoard';

/**
 * Plays the selected minion card.
 */
export const playMinionCard = (G, ctx, index, cardId, cardCost) => {
  const { energy } = G;
  const { currentPlayer } = ctx;

  const minionObject = generateMinion(cardId);
  const CARD_ITEM = generateBoardSlotObject(cardId);

  // subtract the card's cost from player's current energy count
  const newEnergyVal = subtract(energy[currentPlayer].current, cardCost);
  setCurrentEnergy(G, currentPlayer, newEnergyVal);

  // place card in selected index on your board
  placeCardOnBoard(G, currentPlayer, CARD_ITEM, index);

  // move to your playerCards array
  moveCardToPlayedCards(G, currentPlayer, cardId);

  // and then remove card from your hand
  removeCardFromHand(G, currentPlayer, cardId);

  // then deincrement your hand count
  deincrementHandCount(G, currentPlayer);

  // check and init and mechanics
  initCardMechanics(G, ctx, minionObject, index);
};
