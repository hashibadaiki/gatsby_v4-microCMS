import { css } from '@emotion/react';
import react from 'react';

const header = css`
  position: sticky;
  background-color: #aaaaaa;
  height: 80px;
`;

export const Header = () => {
  return (
    <header css={header}>
      <div>GatsbyV4 & mincroCMS</div>
    </header>
  );
};
