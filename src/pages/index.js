import react from 'react';
import { BlogList } from '../components/templates/BlogList';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { Layout } from '../components/templates/Layout';

const wrapper = css`
  width: 100%;
`;

const IndexPage = ({ data }) => {
  console.log('index', data);
  return (
    <Layout>
      <div css={wrapper}>
        <BlogList data={data.allMicrocmsBlog.nodes} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        id
        createdAt(formatString: "Y年M月D日")
        body
      }
    }
  }
`;

export default IndexPage;
