import { AppHeader } from '@/widgets/app-header/app-header';
import { type FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = async ({ children }) => {
  return (
    <>
      <AppHeader variant='auth' />
      {children}
    </>
  );
};

export default Layout;
