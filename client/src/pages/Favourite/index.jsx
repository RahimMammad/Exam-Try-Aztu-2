import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'

const Favourite = () => {
    const {favs, removeFromWishlist} = useContext(WishlistContext)
  return (
    <div>
      <Helmet>
        <title>Favourite</title>
      </Helmet>
      {favs.length === 0 ? <h1>Favourites is Empty</h1> : <table>
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    favs && favs.map((item) => (
                        <tr key={item._id}>
                            <td className='image'><img src={item.image} alt="" /></td>
                            <td><p>{item.name}</p></td>
                            <td><span>${item.price}</span></td>
                            <td><button id='delete' onClick={() =>removeFromWishlist(item._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>}
    </div>
  )
}

export default Favourite
