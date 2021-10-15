import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () =>{
        
        // setCart([]);
        // clearTheCart();

        // history.push('/placeorder');
        history.push('/shipping');
    }
    return (
        <div className= 'shop-container'>
            {/* <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
            <h1>This is Order Review</h1>
            <Cart cart={cart}></Cart> */}

            <div className= 'product-container'>
                {
                    cart.map(product => <ReviewItem  key = {product.key} product={product} handleRemove = {handleRemove}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick = {handlePlaceOrder} className = "btn btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;