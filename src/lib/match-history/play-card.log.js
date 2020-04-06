import { generateNameHTML } from 'lib/match-history/html.log';
import TYPE from 'enums/type.enums';
import createWeaponObject from 'lib/creators/create-weapon-object';

const logPlayGlobalSpellCardMessage = (G, player) => {
  const YOUR_CARD = G.selectedCardObject[player];
  const CARD_NAME = generateNameHTML(YOUR_CARD, TYPE[3]);
  return `Player ${player} cast ${CARD_NAME} spell.`;
};

const logPlayMinionCardMessage = (G, player) => {
  const YOUR_CARD = G.selectedCardObject[player];
  const CARD_NAME = generateNameHTML(YOUR_CARD, TYPE[1]);
  return `Player ${player} summoned a ${CARD_NAME} minion.`;
};

const logPlayWeaponCardMessage = (G, player, cardId) => {
  const YOUR_WEAPON = createWeaponObject(cardId);
  const WEAPON_NAME = generateNameHTML(YOUR_WEAPON, TYPE[4]);
  return `Player ${player} equipped a ${WEAPON_NAME} weapon.`;
};

const logPlayCardMessage = (G, player, action) => {
  const YOUR_CARD = G.selectedCardObject[player];
  const { id } = YOUR_CARD;

  switch (action) {
    case 'playGlobalSpellCard':
      return logPlayGlobalSpellCardMessage(G, player);

    case 'playMinionCard':
      return logPlayMinionCardMessage(G, player);

    case 'playWeaponCard':
      return logPlayWeaponCardMessage(G, player, id);

    default:
      return;
  }
};

export default logPlayCardMessage;
