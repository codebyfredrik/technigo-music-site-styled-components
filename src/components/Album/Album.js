import React from 'react';
import styled from 'styled-components';
// import { AlbumCoverControls } from './../AlbumCoverControls/AlbumCoverControls';
import { Artist } from './../Artist/Artist';

const StyledAlbum = styled.div`
  height: auto;
  width: 100%;
`;

const AlbumCover = styled.div`
  position: relative;
`;

const AlbumCoverImage = styled.img`
  display: block;
  width: 100%;
`;

const Overlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${AlbumCover}:hover & {
    opacity: 1;
  }
`;

const AlbumInfo = styled.div``;

const AlbumName = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  text-decoration: underline;
  text-underline-position: below; //Only supported in Firefox and Safari
  text-underline-offset: 5px; //Only supported in Firefox and Safari
  text-decoration-color: transparent;
  -webkit-text-decoration-color: transparent;
  -moz-text-decoration-color: transparent;
  transition: 0.2s ease-out;

  &:hover {
    text-decoration-color: #fff;
    -webkit-text-decoration-color: #fff;
    -moz-text-decoration-color: #fff;
  }
`;

const AlbumArtists = styled.div``;

export const Album = ({ album }) => {
  return (
    <StyledAlbum>
      <AlbumCover>
        <AlbumCoverImage src={album.images[0].url} alt="Album cover" />
        <Overlay>
          {/* <AlbumCoverControls playUrl={album.external_urls.spotify} /> */}
        </Overlay>
      </AlbumCover>
      <AlbumInfo>
        <AlbumName href={album.external_urls.spotify}>{album.name}</AlbumName>
        <AlbumArtists>
          {album.artists.map(artist => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </AlbumArtists>
      </AlbumInfo>
    </StyledAlbum>
  );
};
