import React from 'react';
import Head from 'next/head';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FooterTitle from '../Components/FooterTitle';
import {Cart} from '../Components';
import { useStateContext } from '../context/StateContext';

const Layout1 = ({children}) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="layout">
      <Head>
        <title>Cart</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {showCart && <Cart/>}
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