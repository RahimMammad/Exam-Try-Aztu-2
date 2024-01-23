import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import "./index.scss"
import { CartContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})
  const {addToCart} = useContext(CartContext)
  const {addToWishlist} = useContext(WishlistContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:7000/${id}`)
      setProductData(response.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className='detail'>
        <img src={productData.image} alt="" />
        <div className="detail-text">
          <h2>{productData.name}</h2>
          <span>${productData.price}</span>
          <div className='add'>
            <button onClick={() => addToCart(productData)}>Add To Cart</button>
            <button onClick={() => addToWishlist(productData)}>Add To Favourites</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
