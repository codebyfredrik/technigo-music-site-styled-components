import React from 'react';
import styled from 'styled-components';
import { Heart } from './../Icons/Heart';
import { Play } from './../Icons/Play';
import { More } from './../Icons/More';

const StyledAlbumCoverControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: inline-block;
    margin: 15px;
  }
`;

export const AlbumCoverControls = ({ playUrl }) => {
  return (
    <StyledAlbumCoverControls>
      <div>
        <Heart />
      </div>
      <div>
        <a href={playUrl}>
          <Play />
        </a>
      </div>
      <div>
        <More />
      </div>
    </StyledAlbumCoverControls>
  );
};
