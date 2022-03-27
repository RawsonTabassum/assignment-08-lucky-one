import React from 'react';
import Display from '../Display/Display';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    return (
        <div>
            <h3 className='mt-5 mb-4'>Selected Paints</h3>
            <div className='row'>
                <div>
                {
                    cart.map(item=> <Display cart={item}></Display>)
                }
                </div>
            </div>
        </div>
    );
};

export default Cart;