import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


function ProductCard({ id, name, rating, mrp, price, description, img,discount } ) {
  return (
   <>
   <div className='justify-container'>
       <Link to={`/product/${id}`} className='product-card'>
        <img src={ img } alt='img' className='product-img'/>
        <p className='product-name'> {name} </p>
        <del className='mrp'> {mrp} </del> 
        <span className='price'> {price} </span>
        <p className='discount'>{discount}</p>
        <p className='product-desc'> {description.substring(0,60)}...
            <Link to={`/product/${id}`} className='read-more'> Read More </Link>
        </p>
    </Link>
    </div>
   </>
  )
}

export default ProductCard
