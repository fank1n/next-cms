import { dbClient } from '@/shared/lib/db';
import { cache } from 'react';

class BlogsRepository {
  //cache нужен для того, чтобы в рамках одного рендера дерева компонентов, был только один запрос к базе qweqwe qwiue qwiueh qwiueh qiwueh qwi
  getBlogsList = cache((): Promise<BlogListElement[]> => dbClient.blog.findMany());

  createBlogElement = (command: CreateListElementCommand): Promise<BlogListElement> => {
    return dbClient.blog.create({
      data: command,
    });
  };

  deleteBlogElement = (command: DeleteBligListElementCommand) => {
    return dbClient.blog.delete({
      where: { id: command.id },
    });
  };
}

export const blogsRepository = new BlogsRepository();
