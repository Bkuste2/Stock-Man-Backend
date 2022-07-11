const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./router/index')

const userRouter = require('./router/user.router')
const productRouter = require('./router/product.router')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({type:'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api', productRouter)
app.use('/api', userRouter)

module.exports = app;