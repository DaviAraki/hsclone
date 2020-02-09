import { incrementHandCount, drawCards } from '../moves/card-moves';

export default {
  onBegin: G => {
    const FIRST_PLAYER = G.turnOrder[0];
    const SECOND_PLAYER = G.turnOrder[1];

    // Draw three cards from the first player's deck into their hand.
    drawCards(G, FIRST_PLAYER, 3);

    // Draw four cards from the first player's deck into their hand;
    // they get four cards since they are not the starting player.
    drawCards(G, SECOND_PLAYER, 4);

    // Give the second player the Energy card (The Orb), which when
    // played gives that player an additional energy point for the turn.
    incrementHandCount(G, SECOND_PLAYER);
    G.players[SECOND_PLAYER].hand.push('GAME_001');
  },

  // End phase when both player's have their starting hands
  // prettier-ignore
  endIf: G => (
    G.players[G.turnOrder[0]].hand.length === 3 &&
    G.players[G.turnOrder[1]].hand.length === 5
  ),

  /**
   * @todo add ability to get new starting hand cards
   */
  // moves: {},

  next: 'play'
};
