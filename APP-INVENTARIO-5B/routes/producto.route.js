const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const router = express.Router();

//Obtener todos los productos
router.get('/', ProductoController.getAllProductos);
router.get('/id/:id', ProductoController.getProductoById);
router.post('/', ProductoController.createProducto);
router.get('/numSerie/:numSerie',ProductoController.getProductoByNumSerie)



module.exports = router;