import Cart from '../Cart/Cart';
import Colors from '../Colors/Colors';
import React, { useEffect, useState } from 'react';
import './Choose.css'

const Choose = () => {
    const [colors, setColor] = useState([]);

    useEffect(()=> {
        fetch('colors.json')
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                setColor(data);
            })
    }, [])

    const [cart, setCart] = useState([]);

    const AddToCart = (color)=> {
        const newCart = [...cart, color];    //spread operator
        setCart(newCart);
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                    {
                        colors.map(color=> <Colors color={color} key={color.id} AddToCart={AddToCart}></Colors>)
                    }
                    </div>
                </div>

                <div className='col-4 bg-lightgray'>
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Choose;