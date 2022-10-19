import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, children, clearCart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    console.log(quantity)
    // counting tax 10%
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandtotal = (total + tax + shipping);
    return (
        <div className='cart'>
            <h3>Order Summery: </h3>
            <p>Selected cart :{quantity}</p>
            <p>Total price :${total}</p>
            <p>Total shipping : ${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grand Total : ${grandtotal.toFixed(2)}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;