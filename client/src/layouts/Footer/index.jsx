import React from 'react'
import "./index.scss"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-container">
        <ul className='image'>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
          <p className='asorem'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
        </ul>
        <ul>
          <Link><h4>Quick Links</h4></Link>
          <Link><p>About</p></Link>
          <Link><p>Offers & Discounts</p></Link>
          <Link><p>Get Coupon</p></Link>
          <Link><p>Contact Us</p></Link>
        </ul>
        <ul>
          <Link><h4>Quick Links</h4></Link>
          <Link><p>About</p></Link>
          <Link><p>Offers & Discounts</p></Link>
          <Link><p>Get Coupon</p></Link>
          <Link><p>Contact Us</p></Link>
        </ul>
        <ul>
          <Link><h4>Quick Links</h4></Link>
          <Link><p>About</p></Link>
          <Link><p>Offers & Discounts</p></Link>
          <Link><p>Get Coupon</p></Link>
          <Link><p>Contact Us</p></Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
