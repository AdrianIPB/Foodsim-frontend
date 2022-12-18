
import React, { useState } from "react"
import Slider from "react-slick"
import "./style.css"



const FlashCard = ({ productItems, addToCart }) => {
  const[count, setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1)
  }  
  
  const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  return (
    <>
      <Slider {...settings}>
      {productItems.map((productItems) => {
      return( 
      <div className="box" id="buah">
        <div className="product mtop">
          <div className="img">
            <span className='discount'> Buah {productItems.id}. {productItems.discount}% off </span>
            <img src={productItems.cover}  alt='' />
            <div className="product-like">
              <label>{count}</label> <br />
              <i className="fa fa-heart" onClick= {increment}></i>
            </div>
          </div>
          <div className='product-details'>
            <h3>{productItems.name}</h3>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <h4>Rp {productItems.price} / kg</h4>
              <button onClick={() => addToCart(productItems)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
    </div> )})}
    </Slider>
    </>
  )
}

export default FlashCard