import React from 'react';
import { NextPage } from 'next';
import { SEO, Layout } from '@src/layouts';

const IndexPage: NextPage = () => {
  return (
    <>
      <SEO title={'Next.js TODO App'} description={'TODO App'} />
      <Layout className="flex">
        <div className="flex flex-col justify-center w-full py-10">
          <div className="w-full mx-auto max-w-lg">
            <div className="text-gray-500 flex">
              <label className="w-full">
                <input
                  className="border border-solid border-gray-300 rounded px-2 py-1 w-full placeholder-gray-300"
                  id="title"
                  type="text"
                  required={true}
                  placeholder="TODOを入力してください。"
                />
              </label>
              <button
                className="uppercase flex-shrink-0 text-green-500 rounded border border-solid border-current transition-colors duration-300 ease-out hover:text-green-100 focus:text-green-100 hover:bg-green-800 focus:bg-green-800"
                type="button"
              >
                <span className="grid place-content-center w-full h-full font-medium text-xs px-3 py-1">
                  add
                </span>
              </button>
            </div>
          </div>
          <div className="w-full mx-auto max-w-lg mt-16">
            <ul className="-mt-8">
              <li className="mt-4 pt-4">
                <div className="flex justify-center">
                  <label className="grid place-content-center">
                    <input type="checkbox" checked={false} />
                  </label>
                  <div className="w-full">
                    <p className="px-2 py-1 h-full flex items-center">タイトル</p>
                  </div>
                  <button
                    className="uppercase flex-shrink-0 text-red-500 rounded border border-solid border-current transition-colors duration-300 ease-out hover:text-red-100 focus:text-red-100 hover:bg-red-800 focus:bg-red-800"
                    type="button"
                  >
                    <span className="grid place-content-center w-full h-full font-medium text-xs px-3 py-2">
                      delete
                    </span>
                  </button>
                </div>
              </li>
              <li className="mt-4 pt-4 border-0 border-t border-solid border-gray-300">
                <div className="flex justify-center">
                  <label className="grid place-content-center">
                    <input type="checkbox" checked={false} />
                  </label>
                  <div className="w-full">
                    <p className="px-2 py-1 h-full flex items-center">タイトル</p>
                  </div>
                  <button
                    className="uppercase flex-shrink-0 text-red-500 rounded border border-solid border-current transition-colors duration-300 ease-out hover:text-red-100 focus:text-red-100 hover:bg-red-800 focus:bg-red-800"
                    type="button"
                  >
                    <span className="grid place-content-center w-full h-full font-medium text-xs px-3 py-2">
                      delete
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
