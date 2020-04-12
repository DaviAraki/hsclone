import deckInfo from 'lib/state/deck-info';

/**
 * Copies card to a player's playedCard array.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const copyCardToPlayedCards = (G, player, cardId) => {
  const cardToPushId = G.players[player].hand.find(c => c.id === cardId).id;
  G.playedCards[player].push(cardToPushId);

  if (G.players[player].deck.includes(cardId))
    deckInfo.changeAmount(G, player, cardId, 1);
  else deckInfo.changeAmount(G, player, cardId, 0);
};

export default copyCardToPlayedCards;
