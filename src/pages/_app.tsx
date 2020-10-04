// import App from "next/app";
import { DefaultSeo } from 'next-seo';
import type { AppProps /* , AppContext */ } from 'next/app';
import React from 'react';
import {
    color, layout, space, typography,
} from 'styled-system';

import Layout from './Layout';
import SEO from './next-seo.config';

function App({ Component, pageProps }: AppProps) {
    console.log('都有的');
    return (
        <Layout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
