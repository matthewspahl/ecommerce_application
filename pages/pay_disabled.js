import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Disabled_Page = () => {

  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, [] );

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>I have disabled payment functionality in this deployed version of this website, as it is just a personal project.</h2>

            <Link href = "/">
                <button type='button' width='300px' className='btn'>
                    Continue Shopping

                </button>
            </Link>

        </div>
    
    </div>
  )
}

export default Disabled_Page