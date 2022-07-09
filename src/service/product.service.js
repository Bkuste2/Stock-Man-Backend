const db = require('../model')
const Product = db.products

exports.findAll = async () => {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'name', 'description', 'price', 'quantity']
        })
        return products
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os produtos. ERROR: ' + e.message)
    } 
}

exports.findById = async (id) => {
    try {
        const product = await Product.findById(id, {
            attributes: ['id', 'name', 'description', 'price', 'quantity']
        })
        return product 
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o produto. ERROR: ' + e.message)
    } 
}

exports.create = async ( name, description, price, quantity ) => {
    try {
        const product= await Product.create({ name, description, price, quantity })
        return product
    } catch (e) {
        throw Error(`Ocorreu um erro ao criar o produto. ERROR: ` + e.message)
    } 
}

exports.update = async({ id, name, description, price, quantity }) => {
    try {
        await Product.update(
            { name, description, price, quantity },
            { where: {id: id}}
        )
    } catch (e) {
        throw Error("Erro ao alterar informações. ERROR: " + e.message)
    }
}

exports.delete = async (id) => {
    try {
        const product = await Product.destroy({
            where:{ id: id }
        })
        return product
    } catch (e) { 
        throw Error(`Ocorreu um erro ao excluir o produto. ERROR: ` + e.message)
    } 
}