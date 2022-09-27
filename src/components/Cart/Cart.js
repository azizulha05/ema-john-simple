import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping ;//* product.quantity(jodi keo chai)
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const granTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Information</h2>
            <p className='text-2xl my-4'>Selected Items: {quantity}</p>
            <p className='text-2xl my-4'>Total Price: ${total}</p>
            <p className='text-2xl my-4'>Total Shipping: ${shipping}</p>
            <p className='text-2xl my-4'>Tax: {tax}</p>
            <p className='text-2xl my-4'>Grand Total: {granTotal}</p>
        </div>
    );
};

export default Cart;