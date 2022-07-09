const db = require('../model')
const Product = db.products

exports.findAll = async () => {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'name', 'units', 'price']
        })
        return products
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os produtos. ERROR: ' + e.message)
    } 
}

exports.findById = async (id) => {
    try {
        const product = await Product.findById(id, {
            attributes: ['id', 'name', 'units', 'price']
        })
        return product
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o produto. ERROR: ' + e.message)
    } 
}

exports.create = async ( name, units, price ) => {
    try {
        const product = await Product.create({ name, units, price })
        return product
    } catch (e) {
        throw Error(`Ocorreu um erro ao criar o produto "${name}". ERROR: ` + e.message)
    } 
}

exports.update = async({id, name, units, price}) => {
    try {
        await Product.update(
            {name, units, price},
            {where: {id}}
        )
    } catch (e) {
        throw Error("Erro ao alterar informações do produto. ERROR: " + e.message)
    }
}

exports.delete = async (id) => {
    try {
        const product = await Product.destroy({
            where:{id}
        })
        return product
    } catch (e) { 
        throw Error(`Ocorreu um erro ao excluir produto. ERROR: ` + e.message)
    } 
}