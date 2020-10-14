const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');

router.get('/', articulosController.list);
router.post('/add', articulosController.guardar);
router.get('/update/:id', articulosController.editar);
router.post('/update/:id', articulosController.confirmar);
router.get('/delete/:id', articulosController.borrar);


module.exports = router;