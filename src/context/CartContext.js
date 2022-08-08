import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => { 
    const [cartProducts, setCartProducts] = useState([])
    const [quantitySelected, setQuantitySelected] = useState([]);
    
    const addProductToCart = (product, ItemCount) => {

        const isProductInCart = cartProducts.find(
            (productInCart) => productInCart.id === product.id
        );

        if(isProductInCart) {
            const newArray = cartProducts.map(productInCart => {
                if(productInCart.id === product.id) {
                    return { ...productInCart, contador: productInCart.ItemCount + product.ItemCount 
                };
                } else {
                    return productInCart;
                }
            });

            setCartProducts(newArray);
        } else {
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
        quantitySelected, 
        setQuantitySelected,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider