import '../assets/styles/globals.css';

import { type PropsWithChildren } from 'react';
import { cn } from '@grahas/utils';

import { fonts } from '../helpers';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>{children}</body>
    </html>
  );
};

export default RootLayout;
