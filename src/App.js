import React, { useState } from "react"
import "./App.css"
import Header from "./common/header/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pages from "./pages/Pages"
import Data from "./components/flashDeals/Data"
import Cart from "./common/Cart/Cart"
import Sdata from "./components/shops/Sdata"

function App() {
  //stpe 1: fetch data from database
  const { productItems } = Data
  const { shopItems } = Sdata


  const [cartItem, setCartItem] = useState([])


  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit){
      setCartItem(cartItem.map((item) => (item.id === product.id?
        {...productExit,qty: productExit.qty + 1} : item)))
    }else{
      setCartItem([...cartItem,{...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    
    const productExit = cartItem.find((item) => item.id === product.id)

    
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeQty = (product) => {
    
    const productExit = cartItem.find((item) => item.id === product.id)

    
    if (productExit.qty) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty * 0 } : item)))
    }
  }

  return (
    <>
    <Router>
      <Header cartItem={cartItem}/>
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} cartItem={cartItem} shopItems={shopItems}/>} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeQty={removeQty} />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;