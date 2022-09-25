import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart } = props;
    const { name, img, category, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;
    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><span>Price: ${price}</span></p>
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;