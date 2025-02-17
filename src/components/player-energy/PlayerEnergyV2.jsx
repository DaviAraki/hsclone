import React from 'react';
import PropTypes from 'prop-types';
import EnergySlot from 'components/player-energy/EnergySlotV2';
import styled from 'styled-components';

export default function PlayerEnergy({ energy, selectedCost }) {
  const { current, total } = energy;
  return (
    <Component data-file="player-energy/PlayerEnergy">
      <div>
        {Array.from(Array(10)).map((_, index) => {
          index = index + 1;
          return (
            <EnergySlot
              available={total >= index}
              // empty={current <= index}
              filled={current >= index}
              key={index}
              number={index}
              willCost={selectedCost >= index}
            />
          );
        })}
      </div>
    </Component>
  );
}

PlayerEnergy.propTypes = {
  energy: PropTypes.shape({
    current: PropTypes.number,
    total: PropTypes.number
  }),
  selectedCost: PropTypes.number
};

const Component = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  font-size: 22px;
  font-weight: bold;
  justify-content: center;
  left: -10px;
  margin: 0;
  position: absolute;
  right: auto;
  top: -1150%;
  user-select: none;

  .energy-slot {
    align-items: center;
    color: #999;
    display: flex;
    flex-flow: column nowrap;
    font-size: 1em;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .energy-slot:before {
    background-size: 400% 100%;
    background: rgba(22, 176, 230, 0.65);
    border-radius: 50%;
    bottom: 0;
    content: '';
    filter: brightness(0.35);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
    z-index: 3;
  }

  .energy-slot + .energy-slot {
    margin-top: 4px;
  }

  .energy-slot img {
    height: 50px;
    width: 50px;
    z-index: 1;
  }

  /* prettier-ignore */
  .energy-slot .text__value--wrapper {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 2;

    & > [data-value='1'] { left: -0.5px; }
  }

  /* prettier-ignore */
  .energy-slot {
    &:nth-child(1), &:nth-child(1):before  { transition-delay: 500ms; }
    &:nth-child(2), &:nth-child(2):before  { transition-delay: 450ms; }
    &:nth-child(3), &:nth-child(3):before  { transition-delay: 400ms; }
    &:nth-child(4), &:nth-child(4):before  { transition-delay: 350ms; }
    &:nth-child(5), &:nth-child(5):before  { transition-delay: 300ms; }
    &:nth-child(6), &:nth-child(6):before  { transition-delay: 250ms; }
    &:nth-child(7), &:nth-child(7):before  { transition-delay: 200ms; }
    &:nth-child(8), &:nth-child(8):before  { transition-delay: 150ms; }
    &:nth-child(9), &:nth-child(9):before  { transition-delay: 100ms; }
    &:nth-child(10), &:nth-child(10):before { transition-delay: 50ms; }
  }

  /* prettier-ignore */
  .energy-slot {
    &.energy-slot--filled:nth-child(1), &.energy-slot--filled:nth-child(1):before   { transition-delay: 0ms; }
    &.energy-slot--filled:nth-child(2), &.energy-slot--filled:nth-child(2):before   { transition-delay: 50ms; }
    &.energy-slot--filled:nth-child(3), &.energy-slot--filled:nth-child(3):before   { transition-delay: 100ms; }
    &.energy-slot--filled:nth-child(4), &.energy-slot--filled:nth-child(4):before   { transition-delay: 150ms; }
    &.energy-slot--filled:nth-child(5), &.energy-slot--filled:nth-child(5):before   { transition-delay: 200ms; }
    &.energy-slot--filled:nth-child(6), &.energy-slot--filled:nth-child(6):before   { transition-delay: 250ms; }
    &.energy-slot--filled:nth-child(7), &.energy-slot--filled:nth-child(7):before   { transition-delay: 300ms; }
    &.energy-slot--filled:nth-child(8), &.energy-slot--filled:nth-child(8):before   { transition-delay: 350ms; }
    &.energy-slot--filled:nth-child(9), &.energy-slot--filled:nth-child(9):before   { transition-delay: 400ms; }
    &.energy-slot--filled:nth-child(10), &.energy-slot--filled:nth-child(10):before { transition-delay: 450ms; }
  }

  .energy-slot .icon {
    height: initial;
    width: 10px;

    svg {
      width: 10px;
      height: initial;
    }

    svg [fill='#000000'] {
      fill: #615e5e;
    }
  }

  .energy-slot.--available {
    color: #999;
    transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .energy-slot.--filled {
    &:before {
      height: 100%;
      opacity: 1;
    }
  }

  /* prettier-ignore */
  .energy-slot.--will-cost {
    transition-delay: 0ms !important;
    &:before { animation: blinkBefore 1200ms ease-in-out infinite; }
    &:before { transition-delay: 0ms !important; }

    @keyframes blinkBefore {
      0%    { opacity: 1; }
      50%   { opacity: 0; }
      100%  { opacity: 1; }
    }
  }
`;
