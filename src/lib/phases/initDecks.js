const cards = require('../../data/debug/cards.json');
const cardIdArray = require('../../data/debug/cardIdArray.json');
// const deck3 = require('../../data/debug/deck3.json');

function buildRandomDeck(array = cardIdArray) {
  const deck = [];
  for (let i = 0; i < 30; i++) {
    deck.push(array.splice(0, 1)[0]);
  }

  return deck;
}

export default {
  // Start the match by initiating each player's deck from the
  // component (client-side) state into the G state.
  // @TODO fix later on for deck selection/lobby/etc
  onBegin: (G, ctx) => {
    G.players[0].deck = ctx.random.Shuffle(buildRandomDeck());
    G.players[1].deck = ctx.random.Shuffle(buildRandomDeck());
  },

  // End phase when both player's decks are full (30 cards)
  // prettier-ignore
  endIf: (G, ctx) => (
    G.players[ctx.playOrder[0]].deck.length === 30 &&
    G.players[ctx.playOrder[1]].deck.length === 30
  ),

  start: true,
  next: 'initHands'
};
