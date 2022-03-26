import React from 'react';
import Cart from '../Cart/Cart';
import Colors from '../Colors/Colors';

const Choose = () => {
    return (
        <div className='container bg-info'>
            <div class="row">
                <div class="col-8">
                    <Colors></Colors>
                </div>
                <div class="col-4">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Choose;