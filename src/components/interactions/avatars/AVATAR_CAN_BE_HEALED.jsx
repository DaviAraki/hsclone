import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function AVATAR_CAN_BE_HEALED({ G, ctx, moves, board }) {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedWarcry } = moves;

  function handleClick() {
    if (warcryObject[currentPlayer] !== null)
      return castTargetedWarcry(
        board === 'YourBoard' ? TARGET_CONTEXT[1] : TARGET_CONTEXT[2],
        WARCRY_TARGET_CONTEXT[2]
      );
  }

  return (
    <Component
      board={board}
      data-file="interactions/avatars/AVATAR_CAN_BE_HEALED"
      onClick={() => handleClick()}
    />
  );
}

AVATAR_CAN_BE_HEALED.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  board: PropTypes.string
};

const BR = 'var(--avatar-border-radius)';
const Component = styled.div`
  border-top-left-radius: ${p => (p.board === 'YourBoard' ? BR : '0')};
  border-top-right-radius: ${p => (p.board === 'YourBoard' ? BR : '0')};
  border-bottom-left-radius: ${p => (p.board === 'TheirBoard' ? BR : '0')};
  border-bottom-right-radius: ${p => (p.board === 'TheirBoard' ? BR : '0')};
  box-shadow: 0 0 5px #ff48e1;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #ff48e1;
  }
`;
