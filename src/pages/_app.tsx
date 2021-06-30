/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import PageChange from 'components/PageChange/PageChange';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/tailwind.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { SEO } from '../../config';

// state
import { UIContextProvider } from '../state';
//

const { log } = console;

Router.events.on('routeChangeStart', (url) => {
  log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition'),
  );
});

Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

export const MyApp = ({ pageProps, Component }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  // @ts-ignore
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  // @ts-ignore
  const pageTitle = Component.pageTitle || SEO.SITE_TITLE;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <UIContextProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>{pageTitle}</title>
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */}
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UIContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;

export const getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
