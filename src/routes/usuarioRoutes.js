const express = require('express');
const router = express.Router();
//const usuarioController = require('../controllers/usuarioController');
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.indexView);
router.get('/criar_conta', usuarioController.criarContaView);
router.post('/usuario_cadastro', usuarioController.cadastrarUsuario);
//router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);

module.exports = router;
