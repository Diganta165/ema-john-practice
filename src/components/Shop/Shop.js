import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);
    useEffect(()=>{
        console.log('product API called')
        fetch(`./products.json`)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
            console.log('products received');
        });
    },[]);
    // console.log(products);

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
        // console.log(savedCart)
        const storedCart = [];
        for(const key in savedCart){  
            // console.log(key);
            // console.log(products)
            const addedProduct  = products.find(product => product.key === key);
            console.log(key, addedProduct);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
            storedCart.push(addedProduct);
        }
        setCart(storedCart);
        }
    },[products])

    const handleAddToCart = (product) =>{
        // console.log(product);
        // console.log('clicked');
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        
        setCart(newCart);
        // Save to local storage for now 
        addToDb(product.key);
    }
    
    const handleSearch = event =>{
        // console.log(event.target.value);
        const searchText = event.target.value;
        const matchedProducts = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
       setDisplayProducts(matchedProducts);
        console.log(matchedProducts)
    }

    return (
       <div>
           <div className = 'search-container'>
                <input type="text" onChange={handleSearch} placeholder="Search Product" />
           </div>
           <div className="shop-container">
            <div className="product-container">
                <h3>Products: {products.length}</h3>
                {
                    displayProducts.map(product => <Product 
                        key = {product.key}
                        product ={product}
                        handleAddToCart ={handleAddToCart}
                        >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className="btn btn-regular">Review Your Order</button>
                    </Link>

                </Cart>
            </div>
            
        </div>
       </div>
    );
};

export default Shop;