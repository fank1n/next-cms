import { Button } from '@/shared/ui/button';
import { dbClient } from '@/shared/lib/db';

export default async function Home() {
  const blogs = await dbClient.blog.findMany();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button>Button</Button>
    </main>
  );
}
