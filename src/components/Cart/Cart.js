import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }

    let totalQuantity = 0;
 
    // const total = cart.reduce((previous, product) =>totalQuantity + product.quantity, 0);
    let total = 0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1: product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            {/* <h5>Items Ordered: {props.cart.length}</h5> */}
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;