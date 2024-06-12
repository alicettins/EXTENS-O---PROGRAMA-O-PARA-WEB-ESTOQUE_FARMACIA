const express = require('express');
const router = express.Router();

//const estoqueController = require('../controllers/estoqueController');
const estoqueController = require('../controller/estoqueController');

router.get('/', estoqueController.indexView);
router.get('/criar_conta', estoqueController.criarContaView);
router.post('/usuario_cadastro', estoqueController.cadastrarUsuario);
//router.post('/cadastrar_usuario', estoqueController.cadastrarUsuario);

module.exports = router;