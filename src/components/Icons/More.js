import React from 'react';
import styled from 'styled-components';

const StyledMore = styled.svg`
  width: 20px;

  circle {
    fill: #fff;
  }
`;

export const More = () => (
  <StyledMore xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <circle cx="2.5" cy="12.5" r="2.5" />
      <circle cx="12" cy="12.5" r="2.5" />
      <circle cx="21.5" cy="12.5" r="2.5" />
    </g>
  </StyledMore>
);
