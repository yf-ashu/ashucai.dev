import Header from '../components/Layout/Header';
import theme from '../components/Layout/theme';
import SEO from '../utilities/next-seo.config';
import MdxComponentStyle from '../components/Layout/MdxComponentStyle';
import { ChakraProvider,
	CSSReset } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';

const GlobalStyle: FC = ({ children }) => (
	<>
		<CSSReset />
		<Global
			styles={css`

        ::selection {
            background-color: #76ced3;
            color: #fefefe;
        }
		@font-face {
			font-family: 'Menlo Regular';
			font-style: normal;
			font-weight: normal;
			src: local('Menlo Regular'), url('Menlo-Regular.woff') format('woff');
        }
		*:focus{
			box-shadow:none !important;
		}

        html {
            min-width: 360px;
            scroll-behavior: smooth;
        }

        #__next {
            display: flex;
            flex-direction: column;
        }
        `}
		/>
		{children}
	</>
);

const App = ({ Component, pageProps }: AppProps) => (
	<MDXProvider components={MdxComponentStyle}>
		<ChakraProvider theme={theme}>
			<GlobalStyle>
				<DefaultSeo {...SEO} />
				<Header />
				<Component {...pageProps} />
			</GlobalStyle>
		</ChakraProvider>
	</MDXProvider>

);

export default App;
