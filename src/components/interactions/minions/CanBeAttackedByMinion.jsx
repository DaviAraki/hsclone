import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CanBeAttackedByMinion({ moves, index }) {
  const { attackMinion } = moves;
  return (
    <Component
      data-file="interactions/minions/CanBeAttackedByMinion"
      onClick={() => attackMinion(index)}
    />
  );
}

CanBeAttackedByMinion.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  box-shadow: 0 0 5px #c43800;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #c43800;
  }
`;
