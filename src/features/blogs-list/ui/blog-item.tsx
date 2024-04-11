'use client';

import { Button } from '@/shared/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import { type FC, useTransition } from 'react';

interface BlogItemProps {
  blog: BlogListElement;
  onDelete: () => Promise<void>;
}

export const BlogItem: FC<BlogItemProps> = ({ blog, onDelete }) => {
  const { title, description } = blog;

  const [isLoadingDelete, startDeleteTransition] = useTransition();

  const onDeleteHandler = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card>
      <CardHeader>
        {!!title && <CardTitle>{title}</CardTitle>}
        {!!description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardFooter>
        <Button onClick={onDeleteHandler} disabled={isLoadingDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};
