import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data'
import './ProductView.css'
function ProductView() {
    const { id } = useParams()
    const selectProduct = products.find((productObject) => productObject.id === id)
    const { name,  mrp, price, description, img ,discount} = selectProduct
 return (
     <>
            <div className='product-container'>
                <div className='img-container'>
                    <img src={img} alt="img" height="100%" width="90%"/>
                </div>
                <div className='detail-container'>
                    <h3 className='product-name'>{name}</h3>
                    <span className='product-price'> {price} </span> 
                    <span className='product-mrp'> 
                        <del> {mrp} </del></span>      
                       <p className='discount'>{discount}</p>
                    <h4 className='about'>About :</h4>
                    <p className='product-description'> {description} </p>
                                   
                    <div>
                    <button className='add-to-cart'> Add to Cart </button>
                    <button className='buy-now'> Buy Now </button> </div>
                       
                </div>
            </div>
        </>
    )
}
export default ProductView