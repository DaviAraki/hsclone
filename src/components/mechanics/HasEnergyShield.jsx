import React from 'react';
import styled from 'styled-components';

export default function HasEnergyShield() {
  return (
    <InnerRing data-file="mechanics/HasEnergyShield">
      <OuterRing />
    </InnerRing>
  );
}

const InnerRing = styled.div`
  border-radius: var(--minion-border-radius);
  height: 104%;
  opacity: 1;
  width: 104%;
  pointer-events: none;
  position: absolute;
  background: transparent;
  border: 2px solid #dbffdb;
`;

const OuterRing = styled.div`
  border-radius: var(--minion-border-radius);
  background: rgba(90, 245, 90, 0.465);
  bottom: 0;
  left: -5%;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -5%;
  width: 110%;
  height: 110%;
`;
