import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => { 
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product, ItemCount) => {

        const isProductInCart = cartProducts.find(
            (productInCart) => productInCart.id === product.id
        );

        if(isProductInCart) {
            if(isProductInCart.contador + ItemCount > isProductInCart.stock)

            return false;

            isProductInCart.contador += ItemCount
        } else {
            product.contador = ItemCount;

            setCartProducts ([...cartProducts, product]);
        }
    }

    const clearAll = () => {
        setCartProducts([])
    }

    const clearProduct = ( id ) => {
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart);
    }

    const data = {
        cartProducts,
        setCartProducts,
        clearAll,
        clearProduct,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider