import react from 'react';
import { Template } from '../components/templates/Template';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';

const sampleStyle = css`
  width: 100%;
  color: red;
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div css={sampleStyle}>App</div>
      <Template />
    </div>
  );
};

export const query = graphql`
  {
    allMicrocmsBlog {
      nodes {
        title
      }
    }
  }
`;

export default IndexPage;
