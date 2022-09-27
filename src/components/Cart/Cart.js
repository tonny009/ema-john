import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h3>Order Summery: </h3>
            <p>Selected cart:{props.cartlength}</p>
        </div>
    );
};

export default Cart;