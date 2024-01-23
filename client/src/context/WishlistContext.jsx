import { createContext, useState } from "react";
import Swal from "sweetalert2"

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [favs, setFavs] = useState(localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : [])

    localStorage.setItem("Wishlist", JSON.stringify(favs))

    const addToWishlist = (item) => {
        const existedProduct = favs.find((x) => x._id === item._id)
        if(!existedProduct) {
            setFavs([...favs, item])
            Swal.fire({
                title: "Successfilly Added",
                icon: "success"
            })
            return
        }Swal.fire({
            title: "Already in Wishlist",
            icon: "warning"
        })
    }

    const removeFromWishlist = (id) => {
        setFavs(favs.filter(item => item._id !== id))
        Swal.fire({
            title: "Successfilly Removed",
            icon: "success"
        })
    }

    const data = {favs, setFavs, addToWishlist, removeFromWishlist}

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider