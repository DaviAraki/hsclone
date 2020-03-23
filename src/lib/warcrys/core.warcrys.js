import boards from 'lib/state/boards';
import health from 'lib/state/health';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import playerCanAttack from 'lib/state/player-can-attack';
import playerWeapon from 'lib/state/player-weapon';
import getCardByID from 'lib/utils/get-card-by-id';
import { discardCardFromHandByIndex } from 'lib/moves/discard-card';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import drawCard from 'lib/moves/draw-card';

const initCoreWarcry = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const cardObj = getCardByID(cardId);
  const warcryNumber = cardObj && cardObj.warcryNumber;

  switch (cardId) {
    case 'CORE_001':
      return CORE_001(G, ctx, cardId, otherPlayer);
    case 'CORE_006':
      return CORE_006(G, ctx, cardId, index, otherPlayer);
    case 'CORE_007':
      return CORE_007(G, ctx, cardId, otherPlayer);
    case 'CORE_012':
      return CORE_012(G, ctx, cardId);
    case 'CORE_013':
      return CORE_013(G, ctx, cardId);
    case 'CORE_016':
      return CORE_016(G, ctx, cardId);
    case 'CORE_020':
      return CORE_020(G, ctx, cardId);
    case 'CORE_021':
      return CORE_021(G, ctx, cardId, index);
    case 'CORE_025':
      return CORE_025(G, ctx, cardId);
    case 'CORE_026':
      return CORE_026(G, ctx, cardId);
    case 'CORE_032':
      return CORE_032(G, ctx, cardId);
    case 'CORE_033':
      return CORE_033(G, ctx, index);
    case 'CORE_035':
      return CORE_035(G, ctx, otherPlayer);
    case 'CORE_036':
      return CORE_036(G, ctx, cardId, otherPlayer);
    case 'CORE_041':
      return CORE_041(G, ctx, index);

    /**
     * <strong>Warcry:</strong> Give a friendly minion +1 Attack.
     */
    case 'CORE_054':
      if (G.boards[currentPlayer].length === 1) return;
      G.warcryObject[currentPlayer] = createWarcryObject(cardId);
      G.boards[currentPlayer].forEach((slot, i) => {
        if (index !== i) slot.canBeBuffed = true;
      });
      break;

    /**
     * <strong>Warcry</strong>: Buff a friendly minion with <strong>Guard</strong> and +1/+2 stats.
     */
    case 'CORE_059':
      if (G.boards[currentPlayer].length === 1) return;
      G.warcryObject[currentPlayer] = createWarcryObject(cardId);
      G.boards[currentPlayer].forEach((slot, i) => {
        if (index !== i) slot.canReceiveGuard = true;
      });
      break;

    /**
     * <strong>Warcry:</strong> Draw 2 cards.
     */
    case 'CORE_061':
      drawCard(G, ctx, currentPlayer, 2);
      break;

    /**
     * <strong>Warcry:</strong> Give a friendly minion <strong>Onslaught</strong>.
     */
    case 'CORE_062':
      if (G.boards[currentPlayer].length === 1) return;
      G.warcryObject[currentPlayer] = createWarcryObject(cardId);
      G.boards[currentPlayer].forEach((slot, i) => {
        if (index !== i) slot.canReceiveOnslaught = true;
      });
      break;

    /**
     * <strong>Warcry:</strong> Restore 6 Health to yourself.
     */
    case 'CORE_082':
      health.add(G, currentPlayer, 6);
      break;

    /**
     * <strong>Warcry:</strong> Give a friendly minion <strong>Onslaught</strong>.
     */
    case 'CORE_099':
      if (G.boards[currentPlayer].length === 1) return;
      G.warcryObject[currentPlayer] = createWarcryObject(cardId);
      G.boards[currentPlayer].forEach((slot, i) => {
        if (index !== i) slot.canReceiveOnslaught = true;
      });
      break;

    case 'CORE_110':
      return CORE_110(G, ctx, cardId);
    case 'CORE_112':
      return CORE_112(G, ctx, cardId, otherPlayer);
    case 'CORE_118':
      return CORE_118(G, ctx, cardId);
    case 'CORE_122':
      return CORE_122(G, ctx, currentPlayer, otherPlayer, warcryNumber, index);
    default:
      break;
  }
};

const CORE_001 = (G, ctx, cardId, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineWarcryTargets(G, otherPlayer);
};

const CORE_006 = (G, ctx, cardId, index, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineHealTargets(G, ctx.currentPlayer, index);
  boards.determineHealTargets(G, otherPlayer, index);
};

const CORE_007 = (G, ctx, cardId, otherPlayer) => {
  playerCanAttack.disable(G, otherPlayer);
  playerWeapon.unequip(G, otherPlayer);
};

const CORE_012 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(createBoardSlotObject(`${cardId}a`));
};

const CORE_013 = (G, ctx) => {
  return drawCardAtStartOfTurn(G, ctx);
};

const CORE_016 = (G, ctx, cardId) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
};

/**
 * Calls for backup in the form of a 1/1 creature.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} cardId
 */
const CORE_020 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(
    createBoardSlotObject(
      `${cardId}${['a', 'b'].sort(() => {
        return Math.random() - 0.5;
      })}`
    )
  );
};

/**
 * Provide +1/+1 to one of your minions.
 */
const CORE_021 = (G, ctx, cardId, index) => {
  if (G.boards[ctx.currentPlayer].length === 1) return;
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineBuffTargets(G, ctx.currentPlayer, index);
};

const CORE_025 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push(createBoardSlotObject(`${cardId}a`));
};

const CORE_026 = (G, ctx) => {
  return drawCardAtStartOfTurn(G, ctx);
};

/**
 * Restore 2 Health to you and all your minions.
 */
const CORE_032 = (G, ctx, cardId) => {
  const HEAL_AMOUNT = 2;

  // heal player
  health.add(G, ctx.currentPlayer, HEAL_AMOUNT);

  // heal minions w/loop method
  for (let i = 0; i < G.boards[ctx.currentPlayer].length; i++)
    if (G.boards[ctx.currentPlayer][i].minionData.id !== cardId)
      boards.addToMinionHealth(G, ctx.currentPlayer, i, HEAL_AMOUNT);
};

/**
 * Gain +1/+1 for each of your other active minions.
 */
const CORE_033 = (G, ctx, index) => {
  const { currentPlayer } = ctx;

  // (length - 1) since we don't count CORE_033 itself
  const NUMBER_OF_MINIONS = parseInt(G.boards[currentPlayer].length - 1);

  // add to CORE_033's current values
  transformTarget(G, currentPlayer, index);

  // transformation method
  function transformTarget(G, player, index) {
    const AP = parseInt(G.boards[player][index].currentAttack);
    const HP = parseInt(G.boards[player][index].currentHealth);

    const newAP = AP + NUMBER_OF_MINIONS;
    const newHP = HP + NUMBER_OF_MINIONS;

    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: newAP,
      currentHealth: newHP,
      totalAttack: newAP,
      totalHealth: newHP
    };
  }
};

/**
 * Attack the enemy hero for 3 damage.
 */
const CORE_035 = (G, ctx, otherPlayer) => {
  health.subtract(G, otherPlayer, 3);
};

/**
 * Deal 2 damage to the enemy player or one of their minions.
 */
const CORE_036 = (G, ctx, cardId, otherPlayer) => {
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  boards.determineWarcryTargets(G, otherPlayer);
};

/**
 * Gift all your other minions with a permanent +1/+1 stat boost.
 */
const CORE_041 = (G, ctx, index) => {
  const { currentPlayer } = ctx;

  // enhance all minions except itself
  G.boards[currentPlayer].forEach((_, i) => {
    if (index !== i) transformTarget(G, currentPlayer, i);
  });

  // transformation method
  function transformTarget(G, player, index) {
    const AP = parseInt(G.boards[player][index].currentAttack);
    const HP = parseInt(G.boards[player][index].currentHealth);

    const newAP = AP + 1;
    const newHP = HP + 1;

    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: newAP,
      currentHealth: newHP,
      totalAttack: newAP,
      totalHealth: newHP
    };
  }
};

/**
 * <strong>Warcry:</strong> Give a friendly minion <strong>Onslaught</strong>.
 */
const CORE_110 = (G, ctx, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 1) return;
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  G.boards[ctx.currentPlayer].forEach(slot => {
    slot.canReceiveOnslaught = true;
  });
};

/**
 * Deal 3 damage.
 */
const CORE_112 = (G, ctx, cardId, otherPlayer) => {
  playerCanBeAttacked.enableByWarcry(G, otherPlayer);
  G.warcryObject[ctx.currentPlayer] = createWarcryObject(cardId);
  G.boards[otherPlayer].forEach(slot => {
    slot.canBeAttackedByWarcry = true;
  });
};

const CORE_118 = (G, ctx) => {
  const randomIdx = ctx.random.Die(G.players[ctx.currentPlayer].hand.length);
  discardCardFromHandByIndex(G, ctx.currentPlayer, randomIdx);
};

/**
 * Deal 1 damage to everyone except itself.
 */
const CORE_122 = (G, ctx, currentPlayer, otherPlayer, amount, index) => {
  G.boards[currentPlayer].forEach((slot, i) => {
    if (i !== index) {
      boards.subtractFromMinionHealth(G, currentPlayer, i, amount);
      boards.killMinionIfHealthIsZero(G, ctx, currentPlayer, slot, i);
    }
  });

  G.boards[otherPlayer].forEach((slot, i) => {
    boards.subtractFromMinionHealth(G, otherPlayer, i, amount);
    boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
  });
};

export default initCoreWarcry;
