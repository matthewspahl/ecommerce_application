import React from 'react';
import Link from 'next/link';

const FooterTitle = () => {
  return (
    <div className='footer-title'>
        <p className='logo'>
            <Link href="/">My Ecommerce Store</Link>
        </p>
    </div>
  )
}

export default FooterTitle