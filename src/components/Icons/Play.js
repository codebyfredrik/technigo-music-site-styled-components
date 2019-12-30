import React from 'react';
import styled from 'styled-components';

const StyledPlay = styled.svg`
  width: 80px;
  margin: 0 10px;
  transition: all 100ms ease-out;

  path {
    fill: white;
    fill-rule: nonzero;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Play = () => (
  <StyledPlay xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path
      d="M50 6.00001c-24.2767 0-44.0000001 19.7233-44.0000001 44.00001 0 24.2767 19.7233001 44 44.0000001 44s44-19.7233 44-44C94 25.72331 74.2767 6.00001 50 6.00001zm0 4c22.1149 0 40 17.8851 40 40.00001 0 22.1149-17.8851 40-40 40s-40.0000001-17.8851-40.0000001-40C9.9999999 27.88511 27.8851 10.00001 50 10.00001zm-15 21v38.00001l34-19-34-19.00001z"
      overflow="visible"
    />
  </StyledPlay>
);
