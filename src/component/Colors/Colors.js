import React from "react";
import './Colors.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Colors = (props) => {
    const {id, name, price, img} = props.color;
    // console.log(props.color);
    // console.log(props.AddToCart);
    
    return (
        <div className="col-sm-3 col-10 border">
                <img className="w-75" src={img} alt="" />
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={()=> props.AddToCart(props.color)} className="btn btn-outline-primary">Add to cart
                <FontAwesomeIcon icon={faShoppingCart} style={{marginLeft:'5px'}}></FontAwesomeIcon></button>
        </div>
    );
};

export default Colors;