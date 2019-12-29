import React from 'react';
import { createGlobalStyle } from 'styled-components';
import data from './data.json';
import { AlbumList } from './components/AlbumList/AlbumList';

const { items: albums } = data.albums;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
  color: #fff;
  font-family: Helvetica, Sans-Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem;
}
`;

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <AlbumList albums={albums} />
    </div>
  );
};
