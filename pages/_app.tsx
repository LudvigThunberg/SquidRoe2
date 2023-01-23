import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { StaticBackgroundContainer } from '../components/basic/StaticBackgroundContainer';
import { Layout } from '../components/basic/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RecoilRoot>
      <StaticBackgroundContainer>
        <Layout>
          <AnimatePresence mode="popLayout">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </StaticBackgroundContainer>
    </RecoilRoot>
  );
}
