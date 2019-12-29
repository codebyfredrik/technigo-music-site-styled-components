import React from 'react';
import styled from 'styled-components';

const StyledArtist = styled.div`
  display: inline-block;

  &:not(:last-child)::after {
    color: #a0a0a0;
    content: ', ';
    white-space: pre;
  }
`;

const Link = styled.a`
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.5;
  text-decoration: underline;
  text-underline-position: below; //Only supported in Firefox and Safari
  text-underline-offset: 5px; //Only supported in Firefox and Safari
  text-decoration-color: transparent;
  -webkit-text-decoration-color: transparent;
  -moz-text-decoration-color: transparent;
  transition: all 0.2s ease-out;

  &:hover {
    color: #fff;
    text-decoration-color: #fff;
    -webkit-text-decoration-color: #fff;
    -moz-text-decoration-color: #fff;
  }
`;

export const Artist = ({ artist }) => {
  return (
    <StyledArtist>
      <Link href={artist.external_urls.spotify}>{artist.name}</Link>
    </StyledArtist>
  );
};
