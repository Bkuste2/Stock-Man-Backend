const router = require('express-promise-router')();
const userController = require('../controller/user.controller')

router.get('/users', userController.findAll)
router.get('/user/:id', userController.findById)
router.post('/user/create', userController.create)
router.put('/user/edit/:id', userController.update)
router.delete('/user/delete/:id', userController.delete)

module.exports = router;