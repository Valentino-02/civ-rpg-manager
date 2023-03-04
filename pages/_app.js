import React from 'react';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { StateContext } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AuthProvider>
  );
}

export default MyApp;
