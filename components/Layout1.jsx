import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import FooterTitle from './FooterTitle';
import {Cart} from './';
import { useStateContext } from '../context/StateContext';

const Layout1 = ({children}) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="layout">
      <Head>
        <title>My Ecommerce Web App</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {/* {showCart && <Cart/>} */}
        {children}

      </main>
      <footer>
        <FooterTitle/>
        <Footer/>

      </footer>
    </div>
  )
}

export default Layout1