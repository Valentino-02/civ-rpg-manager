import React from 'react';
import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../context/authContext';
import { PlayerDataContext } from '../context/playerDataContext';
import { ToastContainer } from 'react-toastify'
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerDataContext>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </PlayerDataContext>
    </AuthProvider>
  );
}

export default MyApp;
