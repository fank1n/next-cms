'use client';

import { ThemeProvider } from '@/features/theme/theme-provider';
import { ComposeChildren } from '@/shared/lib/react';
import { type FC, type ReactNode } from 'react';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
};

export default AppProvider;
