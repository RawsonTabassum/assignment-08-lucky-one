import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearCart} = props;

    const [item, setItem] = useState([]);

    const selectedItem = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (max < 0) {
            setItem('No Item in Cart!');
        } else if (cart.length < 4) {
            setItem('Select at least 4 items!');
        }
        else {
            const chosen = Math.floor(Math.random() * (max - min + 1) + min);
            setItem(cart[chosen].name);
        }
    }

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

            <button onClick={() => selectedItem(0, cart.length - 1)} className='btn btn-outline-primary mb-3' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Choose One For me</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Your Selected Color</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>{item}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-center pb-3">
                <button onClick={clearCart} className='btn btn-outline-primary mb-3' type="button">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;