const productService = require("../service/product.service")

exports.findAll = async (req, res) => {
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

exports.findById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
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

exports.create = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body
        const product = productService.create( name, description, price, quantity )
        res.status(201).send({
            message: 'Produto criado com sucesso',
            body: {
                product,
            },
        })
    } catch (e) {
        return res.status(400).json({
            status: 400, 
            message: "Erro ao cadastrar produto. ERROR: " + e.message
        })
        
    }
}

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, description, price, quantity } = req.body

        await productService.update( id, name, description, price, quantity )

        res.status(200).send({
            message: 'Produto alterado com sucesso',
            body: {
                name, 
                description, 
                price, 
                quantity,
            }
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: "Erro ao salvar alterações. ERROR: " + e.message,
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        await productService.delete(id)
        res.status(200).send({
            message: "Produto deletado!"
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: "Ocorreu um erro ao deletar o produto. ERROR: " + e.message,
        })
    }
}