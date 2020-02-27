import React from 'react';
import styled from 'styled-components';

export default function MINION_HAS_BOON() {
  return <Component data-file="mechanics/MINION_HAS_BOON" />;
}

const Component = styled.div`
  animation: hasBoonGlow 4000ms linear infinite;
  border-radius: var(--minion-border-radius);
  height: 100%;
  opacity: 1;
  width: 100%;
  pointer-events: none;
  position: absolute;

  @keyframes hasBoonGlow {
    0%,
    60% {
      box-shadow: 0 0 0 rgba(236, 210, 79, 0);
    }
    70% {
      box-shadow: 0 0 5px rgba(236, 210, 79, 1);
    }
    80% {
      box-shadow: 0 0 10px rgba(236, 210, 79, 1);
    }
    90% {
      box-shadow: 0 0 30px rgba(236, 210, 79, 0.45);
    }
    100% {
      box-shadow: 0 0 25px rgba(236, 210, 79, 0);
    }
  }
`;
