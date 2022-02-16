import { Global, css } from '@emotion/react';
import react from 'react';
import { resetCSS } from '../../styles/reset';
import { Footer } from './Footer';
import { Header } from './Header';

const wrapper = css`
  max-width: 1480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Layout = ({ children }) => {
  return (
    <div css={wrapper}>
      <Global styles={resetCSS} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
