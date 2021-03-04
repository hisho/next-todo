import React, { FC } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';

type LayoutPropsType = Readonly<{
  children: React.ReactNode;
}>;

export const Layout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="wrapper flex-1">{children}</main>
      <Footer />
    </>
  );
};
