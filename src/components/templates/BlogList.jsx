import react from 'react';
import { BlogCard } from '../molecules/BlogCard';

export const BlogList = ({ data }) => {
  return (
    <div>
      {/* link後で設定 */}
      {/* mapでloop処理 */}
      <BlogCard data={data} />
    </div>
  );
};
