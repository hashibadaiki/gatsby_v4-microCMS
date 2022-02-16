import react from 'react';
import { Template } from '../components/templates/Template';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { Layout } from '../components/templates/Layout';

const sampleStyle = css`
  width: 100%;
  color: red;
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div css={sampleStyle}>App</div>
      <Template />
    </Layout>
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
