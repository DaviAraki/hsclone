import { generateNameHTML } from './html.log';
import TYPE from 'enums/type.enums';

const logMinionAttackedMinionMessage = (
  G,
  currentPlayer,
  otherPlayer,
  index
) => {
  const YOUR_MINION = G.selectedMinionObject[currentPlayer];
  const THEIR_MINION = G.boards[otherPlayer][index];
  const YM_NAME = generateNameHTML(YOUR_MINION.minionData, TYPE[1]);
  const TM_NAME = generateNameHTML(THEIR_MINION.minionData, TYPE[1]);

  return `Player ${currentPlayer}'s ${YM_NAME} attacked Player ${otherPlayer}'s ${TM_NAME} for ${YOUR_MINION.currentAttack} damage.`;
};

export default logMinionAttackedMinionMessage;
