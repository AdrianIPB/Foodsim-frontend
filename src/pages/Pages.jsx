import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"
const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <Shop shopItems={shopItems} addToCart={addToCart} />
    </>
  )
}

export default Pages