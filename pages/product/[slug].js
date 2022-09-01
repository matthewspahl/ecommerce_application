import React, {useState, useEffect} from 'react';

import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';

import {client, urlFor} from '../../lib/client';

import {Product} from '../../components';

import {useStateContext} from '../../context/StateContext';

let offset = 0;

const ProductDetails = ({product, products}) => {

  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);
  const {decQty, incQty, resetQty, qty, onAdd, setShowCart} = useStateContext();
  useEffect(() => {
    // call api or anything
    resetQty();
  }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  const moveRight = () => {
    console.log("move right");
    const track = document.getElementById("track1");
    const left_button = document.getElementById("scroll-left");
    const right_button = document.getElementById("scroll-right");
    if (offset >= -1000){
      offset -= 400;
      track.style.transform = "translateX(" + (offset) + "px)";
      left_button.style.opacity = "1";
      left_button.style.cursor = "pointer";
    }
    if (offset < -1000){
      right_button.style.opacity = "0";
      right_button.style.cursor = "default";
    }

  }

  const moveLeft = () => {
    console.log("move left");

    const track = document.getElementById("track1");
    const left_button = document.getElementById("scroll-left");
    const right_button = document.getElementById("scroll-right");
    if (offset < 0){
      offset += 400;
      track.style.transform = "translateX(" + (offset) + "px)";
      right_button.style.opacity = "1";
      right_button.style.cursor = "pointer";
    }
    if (offset >= 0){
      left_button.style.opacity = "0";
      left_button.style.cursor = "default";
    }
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className='product-detail-image' alt='product_detail_image'/>

          </div>
          <div className='small-images-container'>
            {
              image?.map( (item, i)=> (
                <img key={i} src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)} alt='small image'/>
              ))
            }

          </div>
        </div>

        <div className='product-detail-desc'>
          <h1>{name}</h1>

          <div className='reviews'>
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>

            </div>
            <p>(20)</p>
          </div>

          <h4>Details:</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
            </p>
          </div>

          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
          </div>



        </div>

      </div>

      <div className='maylike-products-wrapper'>
        <h2>Products you may also like</h2>
        <div className='marquee'>

          <div className='scroll-buttons'>
          
          <button type='button' className='scroll-left' id="scroll-left" onClick={() => moveLeft()}>
          <AiFillLeftCircle/>
          </button>
          <button type='button' className='scroll-right' id="scroll-right" onClick={() => moveRight()}>
          <AiFillRightCircle/>
          </button>

          </div>
          <div className='maylike-products-container track' id="track1">
            
            {products.map( (item) => (<Product key={item._id} product={item}/>)   )}

          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug{
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths, fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product" ]'
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: {products, product}
  }

}

export default ProductDetails