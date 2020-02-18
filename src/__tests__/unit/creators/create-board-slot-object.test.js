import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createMinionObject from 'lib/creators/create-minion-object';

test(`should create an object for a new board slot`, () => {
  const CARD_ID = 'CORE_001';
  const expectedMinionData = createMinionObject(CARD_ID);
  const result = createBoardSlotObject(CARD_ID);

  expect(result).toEqual({
    canAttack: false,
    canBeAttacked: false,
    currentAttack: expectedMinionData.attack,
    currentHealth: expectedMinionData.health,
    hasGuard: false,
    minionData: expectedMinionData,
    totalAttack: expectedMinionData.attack,
    totalHealth: expectedMinionData.health
  });
});

test(`should eject if cardId doesn't exist`, () => {
  const CARD_ID = 'CORE_000';
  const result = createBoardSlotObject(CARD_ID);
  expect(result).toEqual();
});
