import {
  hoverOverCardInHand,
  selectPlayableCard
} from './moves/aesthetic-moves';
import {
  drawCard,
  drawCards,
  playMinionCard,
  playSpellCard,
  incrementDeckCount,
  deincrementDeckCount,
  incrementHandCount,
  deincrementHandCount
} from './moves/card-moves';
import {
  enableMinionCanAttack,
  disableMinionCanAttack,
  enableMinionCanBeAttacked,
  disableMinionCanBeAttacked,
  selectMinionForAttack,
  attackMinion
} from './moves/minion-moves';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
export default {
  drawCard: {
    client: false,
    move: (G, player) => {
      return drawCard(G, player);
    }
  },

  drawCards: {
    client: false,
    move: (G, player, numberOfCards) => {
      return drawCards(G, player, numberOfCards);
    }
  },

  playMinionCard: {
    client: false,
    move: (G, ctx, slotNumber, cardId, cardIndex) => {
      return playMinionCard(G, ctx, slotNumber, cardId, cardIndex);
    }
  },

  playSpellCard: {
    client: false,
    move: (G, ctx, card, target = null) => {
      return playSpellCard(G, ctx, card, target);
    }
  },

  enableMinionCanAttack: {
    client: false,
    move: (G, player, slotNumber) => {
      return enableMinionCanAttack(G, player, slotNumber);
    }
  },

  disableMinionCanAttack: {
    client: false,
    move: (G, player, slotNumber) => {
      return disableMinionCanAttack(G, player, slotNumber);
    }
  },

  enableMinionCanBeAttacked: {
    client: false,
    move: (G, player, slotNumber) => {
      return enableMinionCanBeAttacked(G, player, slotNumber);
    }
  },

  disableMinionCanBeAttacked: {
    client: false,
    move: (G, player, slotNumber) => {
      return disableMinionCanBeAttacked(G, player, slotNumber);
    }
  },

  selectMinionForAttack: {
    client: false,
    move: (G, ctx, slotNumber) => {
      return selectMinionForAttack(G, ctx, slotNumber);
    }
  },

  attackMinion: {
    client: false,
    move: (G, ctx, slotNumber) => {
      return attackMinion(G, ctx, slotNumber);
    }
  },

  // energy manipulations
  // setCurrentEnergy: (G, ctx, player, amount) => setCurrentEnergy(G, ctx, player, amount),
  // setTotalEnergy: (G, ctx, player, amount) => setTotalEnergy(G, ctx, player, amount),

  // deck & hand count manipulations
  deincrementDeckCount: (G, player) => deincrementDeckCount(G, player),
  deincrementHandCount: (G, player) => deincrementHandCount(G, player),
  incrementDeckCount: (G, player) => incrementDeckCount(G, player),
  incrementHandCount: (G, player) => incrementHandCount(G, player),

  // interaction moves; indicating the opponent player's hover/selection
  hoverOverCardInHand: (G, ctx, index) => hoverOverCardInHand(G, ctx, index),
  selectPlayableCard: (G, ctx, index) => selectPlayableCard(G, ctx, index)
};
