import React, { FC } from 'react';

type FooterPropsType = Readonly<{
  children?: never;
}>;

export const Footer: FC<FooterPropsType> = () => {
  return (
    <>
      <footer className="wrapper">
        <div className="mx-full px-full py-20 bg-gray-50 flex items-center">
          <p className="text-gray-500 text-xs tracking-tighter">
            <small>Copyright © 2021 Hisho, Inc. All rights reserved.</small>
          </p>
        </div>
      </footer>
    </>
  );
};
