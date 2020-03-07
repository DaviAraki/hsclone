import boards from 'lib/state/boards';
import deselectMinion from 'lib/moves/deselect-minion';

/**
 * Attacks a minion (index) with the current player's selectedMinionObject.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const attackMinion = (G, ctx, index) => {
  const { selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];

  // eject if ATTACKING_MINION can't attack
  if (ATTACKING_MINION && !ATTACKING_MINION.canAttack) return;

  const MINION_BEING_ATTACKED = G.boards[otherPlayer][index];
  const MINION_BEING_ATTACKED_INDEX = index;

  // eject if MINION_BEING_ATTACKED can't be attacked
  if (MINION_BEING_ATTACKED && !MINION_BEING_ATTACKED.canBeAttackedByMinion)
    return;

  // Subtract `ATTACKING_MINION.currentAttack`
  // from MINION_BEING_ATTACKED_INDEX's currentHealth value
  boards.subtractFromMinionHealth(
    G,
    otherPlayer,
    MINION_BEING_ATTACKED_INDEX,
    ATTACKING_MINION.currentAttack
  );

  // Subtract `MINION_BEING_ATTACKED.currentAttack`
  // from ATTACKING_MINION_INDEX's currentHealth value
  boards.subtractFromMinionHealth(
    G,
    currentPlayer,
    ATTACKING_MINION_INDEX,
    MINION_BEING_ATTACKED.currentAttack
  );

  // if minion has onslaught, allow it to attack again
  if (G.boards[currentPlayer][ATTACKING_MINION_INDEX].hasOnslaught) {
    boards.enableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);
  } else {
    // disable ATTACKING_MINION's ability to attack
    boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);
  }

  // disable MINION_BEING_ATTACKED's ability to be attacked
  boards.disableCanBeAttacked(G, currentPlayer, MINION_BEING_ATTACKED_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  deselectMinion(G, ctx);

  // kill ANY minions with health <= 0 and reset states
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    currentPlayer,
    ATTACKING_MINION,
    ATTACKING_MINION_INDEX
  );
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    otherPlayer,
    MINION_BEING_ATTACKED,
    MINION_BEING_ATTACKED_INDEX
  );
};

export default attackMinion;
