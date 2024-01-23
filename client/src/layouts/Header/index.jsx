import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { CartContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {cart} = useContext(CartContext)
    const {favs} = useContext(WishlistContext)
    const [isSticky, setisSticky] = useState(false)

    const handleClickMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setisSticky(scrollPosition > 50);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
        <nav className={`navbar ${isSticky ? "active" : ""}`}>
            <div className='navbar-main-container'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                <ul>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/admin"}>Admin</NavLink>
                    <NavLink id='favs' to={"/cart"}>
                        Cart
                        <div className='count'>
                            {cart.length}
                        </div>
                    </NavLink>
                    <NavLink id='favs' to={"/favourite"}>
                        Favourite
                        <div className='count'>
                            {favs.length}
                        </div>
                    </NavLink>
                </ul>
                <i onClick={handleClickMenu} class="fa-solid fa-bars"></i>
            </div>
        </nav>
        <nav id='sidebar' style={{top: isOpen ? "100px" : "-406px"}}>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/admin"}>Admin</NavLink>
                <NavLink to={"/cart"}>Cart</NavLink>
                <NavLink to={"/favourite"}>Favourite</NavLink>
            </ul>
        </nav>
    </>
  )
}

export default Header
