import React from 'react'
import CartListItem from '../components/CartProcess/CartListItem'

const CartPage = () => {

    return (
        <div className='container'>
            <section className='main-container'>
                <h4>Tu carrito de compras</h4>
                <CartListItem />
            </section>
        </div>
    )
}

export default CartPage
