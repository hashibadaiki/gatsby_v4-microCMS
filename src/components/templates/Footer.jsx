import { css } from '@emotion/react';
import react from 'react';

const footer = css`
  background-color: #aaaaaa;
  height: 80px;
  margin-top: auto;
`;

export const Footer = () => {
  return (
    <footer css={footer}>
      <small>GatsbyV4 & mincroCMS</small>
    </footer>
  );
};
