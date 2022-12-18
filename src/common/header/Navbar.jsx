import React, { useState} from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {

    const [MobileMenu , setMobileMenu] = useState(false)
  return (
    <div>
        <header className="header">
            <div className="container d_flex">
            <div className="catgrories d_flex">
                <span className="fa-solid fa-border-all"></span>
                <h4>
                    Kategori <i className="fa fa-chevron-down"></i>
                </h4>
            </div>

            <div className="navlink">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                  
                    <li>
                        <Link to='/user'>user account</Link>
                    </li>
                    
                </ul>

                <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    {MobileMenu? <i className="fas fa-times close home-bth"></i> : <i className="fa-solid fa-xmark open"></i>}
                </button>
            </div>
            </div>
        </header>
        </div>
  )
}

export default Navbar