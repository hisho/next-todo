import React from 'react';
import { NextPage } from 'next';
import { SEO, Layout } from '@src/layouts';

const IndexPage: NextPage = () => {
  return (
    <>
      <SEO title={'Next.js TODO App'} description={'TODO App'} />
      <Layout>
        <div>本文</div>
      </Layout>
    </>
  );
};

export default IndexPage;
