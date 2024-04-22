import CreateBlogForm from '@/features/blogs-list/pub/create-blog-form';
import BlogsList from '@/features/blogs-list/pub/blogs-list';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
      <CreateBlogForm revalidatePagePath='/' className='w-1/3' />
      <BlogsList revalidatePagePath='/' />
    </main>
  );
}
