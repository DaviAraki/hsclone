/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';
import YourAvatar from 'components/avatars/YourAvatar';
import TheirAvatar from 'components/avatars/TheirAvatar';

export default function YourPlayerArea({
  G,
  ctx,
  moves,
  isActive,
  board,
  theirID,
  avatars,
  playerClass
}) {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedWarcryEffect } = moves;

  return (
    <Component board={board} data-file="player-areas/TheirPlayerArea">
      <AvatarWrapper board={board}>
        <AvatarHealthWrapper />
        <TheirAvatar
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          board={board}
          theirID={theirID}
          src={avatars[playerClass[theirID]]}
        />
      </AvatarWrapper>
    </Component>
  );
}

const Component = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.465);
  width: 100%;
  background: #72535e;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: var(--board-theirPlayerArea-height) 0 0;
  height: var(--board-theirPlayerArea-height);
  position: relative;
`;

const AvatarWrapper = styled.div`
  border-bottom-left-radius: var(--avatar-border-radius);
  border-bottom-right-radius: var(--avatar-border-radius);
  background: #72535e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.465);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0 12px;
  position: relative;
  height: calc(var(--avatar-height) * 2);
  width: calc(var(--avatar-width) * 1.15);
  top: calc(var(--avatar-height) / 1.25);
`;

const AvatarHealthWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.465);
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 20px;
  font-weight: bold;
  height: calc(var(--player-health-size) * 1.25);
  justify-content: center;
  position: absolute;
  width: calc(var(--player-health-size) * 1.25);
  z-index: 1;
  background: #72535e;
  top: 43%;
  right: -8%;
`;
