'use server';

import { revalidatePath } from 'next/cache';
import { blogsRepository } from './blogs.repository';

export const createBlogAction = async (revalidatePagePath: string, command: CreateListElementCommand) => {
  await blogsRepository.createBlogElement(command);
  revalidatePath(revalidatePagePath);
};
