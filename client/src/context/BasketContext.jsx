import { createContext, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast"

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [])

    localStorage.setItem("Cart", JSON.stringify(cart))

    let subTotal = 0

    cart.map((e) => subTotal += e.count * e.price)

    const addToCart = (item) => {
        const existedProduct = cart.find((x) => x._id === item._id)
        if(existedProduct) {
            existedProduct.count++
            existedProduct.total = existedProduct.count * existedProduct.price
            setCart([...cart])
            Swal.fire({
                title: "Already in Cart",
                icon: "warning"
            })
            return
        }
        const total = item.price
        setCart([...cart, {...item, count: 1, total}])
        Swal.fire({
            title: "Successfully Added",
            icon: "success"
        })
    }

    const modifyCount = (increment, item) => {
        const existedProduct = cart.find((x) => x._id === item._id)
        if(existedProduct) {
            if(increment) {
                existedProduct.count++
                existedProduct.total = existedProduct.count * existedProduct.price
                setCart([...cart])
                toast.success('Count increase!')
            } else if(existedProduct.count === 1) {
                removeFromCart(item._id)
            } else {
                existedProduct.count--
                existedProduct.total = existedProduct.count * existedProduct.price
                setCart([...cart])
                toast.success('Count decrease!')
            }
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item._id !== id))
        Swal.fire({
            title: "Successfully Removed",
            icon: "success"
        })
    }

    const data = {cart, setCart, addToCart, modifyCount, removeFromCart, subTotal}

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider