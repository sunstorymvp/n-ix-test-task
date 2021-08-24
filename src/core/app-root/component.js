import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const AppRoot = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>n-ix-test-task</title>
      <meta name="description" content="n-ix-test-task" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

AppRoot.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default AppRoot;
