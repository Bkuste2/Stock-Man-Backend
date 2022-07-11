const router = require('express-promise-router')();
const productController = require('../controller/product.controller')

router.get('/products', productController.findAll);
router.get('/product/:id', productController.findById);
router.post('/product', productController.create);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

module.exports = router;