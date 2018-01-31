import React from 'react';
// import Rating from './Rating';

const ItemCard = (props) =>{

    return (
        <div className="item-card">
            <div>
                 <img src={props.product.images.standard} alt="product"></img>
           
            </div>
            <a href="">{props.product.names.title}</a>
           
            <div className="item-card__pirce">{props.product.prices.current}</div>
        </div>
    )
}

export default ItemCard;