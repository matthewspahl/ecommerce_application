import React from 'react';
import {Toaster} from 'react-hot-toast';
import { Layout1 } from '../components';
import '../styles/globals.css';
import {StateContext} from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout1>
      <Toaster/>
      <Component {...pageProps} />
    </Layout1>
    </StateContext>
  
  )
}

export default MyApp
