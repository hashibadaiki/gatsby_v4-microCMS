import react from 'react';

export const BlogCard = ({ data }) => {
  console.log('card', data);

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};
