import react from 'react';
import { BlogCard } from '../molecules/BlogCard';

export const BlogList = ({ data }) => {
  console.log('temple', data);

  return data.map((blog) => {
    return (
      <div key={blog.id}>
        {/* link後で設定 */}
        <BlogCard data={blog} />
      </div>
    );
  });
};
