import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
    <section className="flash">
        <div className="container">
            <div className="heading f_flex">
            <i className="fa-solid fa-lemon"></i>
            <h1>Buah</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
    </section>
    </>
  )
}

export default FlashDeals