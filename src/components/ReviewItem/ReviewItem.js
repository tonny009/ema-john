import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './reviewItem.css';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, shipping, quantity, img } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="review-details-container">
                <div className="reviewdetails">
                    <p>{name}</p>
                    <p><small>$Price:{price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                    <p><small>$Shipping:{shipping}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)}
                        className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>

                </div>

            </div>

        </div>
    );
};


export default ReviewItem;