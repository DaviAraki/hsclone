import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function MINION_CAN_RECEIVE_STAMPEDE({ G, ctx, moves, index }) {
  const { giveMinionStampede } = moves;

  function handleClick() {
    return giveMinionStampede(index);
  }

  return (
    <Component
      data-file="interactions/minions/MINION_CAN_RECEIVE_STAMPEDE"
      onClick={() => handleClick()}
    />
  );
}

MINION_CAN_RECEIVE_STAMPEDE.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  box-shadow: 0 0 5px #ffe626, 0 0 10px #26ffd5;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 10px #ffe626, 0 0 20px #26ffd5;
  }
`;
