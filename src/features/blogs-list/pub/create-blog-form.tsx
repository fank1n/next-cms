'use client';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import React, { FC, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBlogAction } from '../actions';
import { Button } from '@/shared/ui/button';
import { cn } from '@/lib/utils';

const createBlogFormSchema = z.object({
  title: z.string(),
  description: z.string(),
});

interface ICreateBlogFormProps {
  className: string;
  revalidatePagePath: string;
}

const CreateBlogForm: FC<ICreateBlogFormProps> = ({ revalidatePagePath, className }) => {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useForm<z.infer<typeof createBlogFormSchema>>({
    resolver: zodResolver(createBlogFormSchema),
    defaultValues: { title: '', description: '' },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createBlogAction(revalidatePagePath, data);
          });
        })}
        className={cn(className, 'space-y-5')}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='title...' {...field} className='rounded' />
              </FormControl>
              <FormDescription>Write what your blog will be about </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='description...' {...field} />
              </FormControl>
              <FormDescription>Don't forget about the blog description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isCreateTransition}>
          Create blog
        </Button>
      </form>
    </Form>
  );
};

export default CreateBlogForm;
