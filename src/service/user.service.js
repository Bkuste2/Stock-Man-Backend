const db = require('../model')
const User = db.users

exports.findAll = async () => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'email', 'password']
        })
        return users
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    } 
}

exports.findById = async (id) => {
    try {
        const user = await User.findByPk(id, {
            attributes: ['id', 'username', 'email', 'password']
        })
        return user
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.message)
    } 
}

exports.create = async ( username, email, password ) => {
    try {
        const user = await User.create({ username, email, password })
        return user
    } catch (e) {
        throw Error(`Ocorreu um erro ao criar o usuário "${username}". ERROR: ` + e.message)
    } 
}

exports.update = async (id, username, email, password) => {
    try {
        await User.update(
            {username, email, password},
            {where: {id}}
        )
    } catch (e) {
        
    }
}

exports.delete = async (id) => {
    try {
        const user = await User.destroy({
            where:{id}
        })
        return user
    } catch (e) { 
        throw Error(`Ocorreu um erro ao excluir usuário "${username}". ERROR: ` + e.message)
    } 
}