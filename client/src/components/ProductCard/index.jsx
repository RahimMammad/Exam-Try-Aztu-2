import React, { useContext } from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Card = ({item}) => {
    const navigate = useNavigate()
    const {addToCart} = useContext(CartContext)
    const {addToWishlist} = useContext(WishlistContext)
  return (
    <div className='product-card'>
      <div className='image'>
        <i onClick={() =>addToWishlist(item)} className="fa-regular fa-heart"></i>
        <img onClick={() => navigate(`${item._id}`)} src={item.image} alt="" />
        <button onClick={() =>addToCart(item)}>Add To Cart</button>
      </div>
      <h3>{item.name}</h3>
      <span>${item.price}</span>
    </div>
  )
}

export default Card
