import React from "react"
import { Nav} from "react-bootstrap"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/Banana.webp",
      cateName: "Buah",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Kategori </h1>
          <h1>FoodSim </h1>
        </div>
        {data.map((value, index) => {
          return (
            <Nav>
                  <Nav.Link href="#buah">
                <div className="box f_flex" key={index}>
                  <img src={value.cateImg} alt='' />
                  <span>{value.cateName}</span>
                </div>
                </Nav.Link>
                </Nav>
          )
        })}
        
      </div>
    </>
  )
}

export default Catg
