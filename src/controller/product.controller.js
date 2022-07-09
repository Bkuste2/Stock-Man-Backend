const cors = require("cors")
const { response } = require("express")
const productService = require("../service/product.service")

exports.findAll = async ( req, res ) => {
    try {
        const products = await productService.findAll()
        return res.status(200).json({
            status:200,
            data: products,
            message: 'Produtos Listados Com Sucesso',
        })
    } catch (e) {
        res.send(400).json({
            status:400,
            message:e,
        })
    }
}

exports.findById = async ( req, res ) => {
    try {
        const id = parseInt(req.body.id);
        const product = await productService.findById(id)
        res.status(200).json({
            status: 200,
            data: product,
            message: 'Produto encontrado com sucesso',
        })
    } catch (e) {
        res.send(400).json({
            status: 400,
            message: e,
        })
    }
}

exports.create = async ( req, res ) => {
    try {
        const { name, units, price } = req.body
        const user = userService.create( name, units, price )
        res.status(201).send({
            body: user,
        })
    } catch (e) {
        return (
            res.status(400).json({
                status: 400, 
                message: "Erro ao cadastrar produto. ERROR: " + e.message
            })
        )
    }
}

exports.update = async ( req, res ) => {
    try {
        const id = parseInt(req.params.id)
        const { name, units, price } = req.body

        await userService.update( id, name, units, price )

        res.status(200).send({
            message: 'Produto alterado com sucesso',
            body: {
                username,
                email,
                password
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 400,
            message: "Erro ao salvar alterações. ERROR: " + e.message,
        })
    }
}

exports.delete = async ( req, res ) => {
    try {
        const id = req.body
        userService.delete(id)
        res.status(200).send({
            message: "Produto Deletado!"
        })
    } catch (e) {
        res.status(400).json({
            status:400,
            message: "Ocorreu um erro ao deletar o Produto. ERROR: " + e.message,
        })
    }
}