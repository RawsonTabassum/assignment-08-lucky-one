import React from 'react';

const Display = (props) => {
    const {id, img, name, price} = props.cart
    return (
        <div className='m-2'>
            <img className='w-25' src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Display;