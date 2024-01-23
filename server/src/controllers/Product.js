import Product from "../models/Product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, price, image} = req.body
        const newProduct = new Product({name, price, image})
        newProduct.save()
        res.status(200).send({msg: "Added"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {name, price, image} = req.body
        const updateProduct = await Product.findByIdAndUpdate(req.params.id)
        if(updateProduct) {
            updateProduct.name = name,
            updateProduct.image = image, 
            updateProduct.price = price
        }
        updateProduct.save()
        res.status(200).send({msg: "Updated"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: "Deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}