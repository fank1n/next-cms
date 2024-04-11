import React, { type FC } from 'react';
import { blogsRepository } from '../blogs.repository';
import { BlogItem } from '../ui/blog-item';
import { revalidatePath } from 'next/cache';

interface IBlogsListProps {
  revalidatePagePath: string;
}

const BlogsList: FC<IBlogsListProps> = async ({ revalidatePagePath }) => {
  const blogsList = await blogsRepository.getBlogsList();

  const onBlogItemDelete = async (blogId: string) => {
    'use server';

    await blogsRepository.deleteBlogElement({ id: blogId });

    revalidatePath(revalidatePagePath);
  };

  return (
    <div className='flex flex-col gap-3 w-full'>
      {blogsList.map((blog) => (
        <BlogItem key={blog.id} blog={blog} onDelete={onBlogItemDelete.bind(null, blog.id)} />
      ))}
    </div>
  );
};

export default BlogsList;
