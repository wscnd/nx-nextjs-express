import './styles.css';

import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-pokemon!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
