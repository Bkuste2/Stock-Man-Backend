const userService = require("../service/user.service")

exports.findAll = async ( req, res ) => {
    try {
        const users = await userService.findAll()
        return res.status(200).json({
            status:200,
            data: users,
            message: 'Usuários Listados Com Sucesso',
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
        const id = parseInt(req.params.id);
        const user = await userService.findById(id)
        res.status(200).json({
            status: 200,
            data: user,
            message: 'Usuário encontrado com sucesso',
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
        const { username, email, password } = req.body
        const user = userService.create(username, email, password)
        res.status(201).send({
            message: 'Usuário criado com sucesso',
            body: {
                user,
            },
        })
    } catch (e) {
        return (
            res.status(400).json({
                status: 400, 
                message: "Erro ao cadastrar usuário. ERROR: " + e.message
            })
        )
    }
}

exports.update = async ( req, res ) => {
    try {
        const id = parseInt(req.params.id)
        const { username, email, password } = req.body

        await userService.update(id,username, email, password)

        res.status(200).send({
            message: 'Usuário alterado com sucesso',
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
        const id = parseInt(req.params.id)
        await userService.delete(id)
        res.status(200).send({
            message: "Usuário Deletado!"
        })
    } catch (e) {
        res.status(400).json({
            status:400,
            message: "Ocorreu um erro ao deletar o usuário. ERROR: " + e.message,
        })
    }
}