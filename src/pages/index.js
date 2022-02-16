import react from 'react';
import { BlogList } from '../components/templates/BlogList';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { Layout } from '../components/templates/Layout';

const wrapper = css`
  width: 100%;
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div css={wrapper}>
        <BlogList data={data} />
      </div>
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
