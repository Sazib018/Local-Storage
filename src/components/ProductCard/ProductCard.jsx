import React, { useState } from 'react';

const ProductCard = ({ product}) => {
    const { title, description, image, price,} = product;


    return (
        <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10 h-96">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <small>Price: ${price}</small>
                <div className="card-actions">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;