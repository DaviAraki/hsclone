import discardCard from 'lib/moves/discard-card';
import drawCard from 'lib/moves/draw-card';
import health from 'lib/state/health';

/**
 * Draws or discards a single card at the start of the current player's turn.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @requires moves::drawCard()
 * @requires moves::discardCard()
 */
const drawCardAtStartOfTurn = (G, ctx) => {
  const { currentPlayer } = ctx;
  const currentPlayerDeckLength = G.players[currentPlayer].deck.length;
  const currentPlayerHandLength = G.players[currentPlayer].hand.length;
  const currentPlayerHasLessThan10Cards = currentPlayerHandLength <= 9;

  if (currentPlayerHasLessThan10Cards) drawCard(G, currentPlayer);
  else discardCard(G, currentPlayer);

  if (currentPlayerDeckLength === 0)
    health.subtractFromPlayerHealth(
      G,
      currentPlayer,
      Math.abs(G.counts[currentPlayer].deck)
    );
};

export default drawCardAtStartOfTurn;
