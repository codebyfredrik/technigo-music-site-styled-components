import React from 'react';
import styled from 'styled-components';
import { Album } from '../Album/Album';

const StyledAlbumList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  width: 100%;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const AlbumList = ({ albums }) => {
  return (
    <>
      <Title>New albums & singles</Title>
      <StyledAlbumList>
        {albums.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </StyledAlbumList>
    </>
  );
};
