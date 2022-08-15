import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client';

const Herobanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h3> {heroBanner.midText} </h3>
            <h1> {heroBanner.largeText1}</h1>
            
            


            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button" className='shop-button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    {/* <h5>Description</h5> */}
                    <p>{heroBanner.desc}</p>

                </div>
            </div>

            <img src={urlFor(heroBanner.image)} alt="mouse" className='hero-banner-image' width="450"/>
        </div>
    </div>
  )
}

export default Herobanner