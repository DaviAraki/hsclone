import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import selectedMinionIndex from 'lib/state/selected-minion-index';
import selectedMinionObject from 'lib/state/selected-minion-object';
import boards from 'lib/state/boards';

/**
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} minionObject
 * @param {number} index
 * @requires selectedMinionIndex
 * @requires selectedMinionObject
 */
const selectMinion = (G, ctx, minionObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedMinionIndex.set(G, currentPlayer, index);
  selectedMinionObject.set(G, currentPlayer, minionObject);
  playerCanBeAttacked.enable(G, otherPlayer);
  boards.determineAttackTargets(G, otherPlayer);
};

export default selectMinion;
