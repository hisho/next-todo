import React, { FC } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';

type LayoutPropsType = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

export const Layout: FC<LayoutPropsType> = ({ className = '', children }) => {
  return (
    <>
      <Header />
      <main className={`wrapper flex-1 ${className}`}>{children}</main>
      <Footer />
    </>
  );
};
