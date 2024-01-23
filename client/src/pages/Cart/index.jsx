import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { CartContext } from '../../context/BasketContext'

const Cart = () => {
    const {cart, modifyCount, removeFromCart, subTotal} = useContext(CartContext)
  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {cart.length === 0 ? <h1>Cart is Empty</h1> : 
        <table>
        <thead>
            <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Count</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {
                cart && cart.map((item) => (
                    <tr key={item._id}>
                        <td className='image'><img src={item.image} alt="" /></td>
                        <td><p>{item.name}</p></td>
                        <td><span>${item.price}</span></td>
                        <td>
                            <div>
                                <button onClick={() => modifyCount(false, item)}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => modifyCount(true, item)}>+</button>
                            </div>
                        </td>
                        <td><button id='delete' onClick={() =>removeFromCart(item._id)}>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
        <span>${subTotal}.00</span>
    </table>
      }
    </div>
  )
}

export default Cart
