import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price } = props.product;
    const { handleAddtoCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller:{seller}</small></p>
            </div>
            <button onClick={() => { handleAddtoCart(props.product) }} className='btn-cart'><p>Add to cart</p></button>

        </div>
    );
};

export default Product;