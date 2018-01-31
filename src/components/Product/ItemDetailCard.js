import React from 'react';
// import Rating from './Rating';
import styles from './ItemDetailCard.scss';

const ItemDetailCard = (props) =>{

    return (
        <a className="item-detial-card">
            <div className="item-detail-content">
                <div className="thumbnail">
                    <img src={props.product.image} alt="product"></img>
                </div>
                <div>   
                    <a href="">{props.product.name}</a>
                </div>
                <div className="item-add-cart">
                     <div className="item-card__price">${props.product.regularPrice}</div>
                     <a href="" className="btn">Add to Cart</a>
                </div>
            </div>
           
        </a>
    )
}

export default ItemDetailCard;