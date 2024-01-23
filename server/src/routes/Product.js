import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/Product.js"

const route = express.Router()
route.get("/", getProducts)
route.get("/:id", getProduct)
route.post("/", createProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)

export default route