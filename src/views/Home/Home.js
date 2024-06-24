import React from 'react'
import products from '../../data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

function Home() {
    return (
 <>
     <h1 className='title'>Bridal Lehnga's</h1>
     <div className='product-container'>
  {
     products.map((productObject, i) => {
     const {
              id,
             name,
             mrp,
            price,
         description,
            img,
            rating,
            discount,
     } = productObject
 return (
         <ProductCard
                key={i}
                id={id}
               name={name}
               mrp={mrp}
             price={price}
             description={description}
            img = {img}
            rating={rating}
            discount={discount}
              />
              )
           })
         }
     </div>
     </>
    )
  }

export default Home