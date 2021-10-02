import { useEffect, useState } from "react"
import {getStoredCart} from '../utilities/fakedb'

const useCart = products =>{
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        if(products.length){
            // console.log('Products Length',products.length)
            const savedCart = getStoredCart();
            console.log('get Stored Cart',savedCart)
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    //set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    },[products])

    return [cart, setCart];
}

export default useCart;