const path = require('path');
const Usuario = require('../models/usuario');

function indexView(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

function criarContaView(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'usuario_cadastro.html'));
}

function cadastrarUsuario(req, res) {
  let usuario = {
    email: req.body.email,
    senha: req.body.senha,
    id_funcionario: req.body.id_funcionario,
    cargo: req.body.cargo,
    nome: req.body.nome
  };

  Usuario.create(usuario)
    .then(() => {
      res.redirect('/usuarios/criar_conta?cadastrar_usuario=true');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/usuarios/criar_conta?cadastrar_usuario=false');
    });
}

function listarUsuarios(req, res) {
  Usuario.findAll()
    .then((usuarios) => {
      res.render('usuarios.html', { usuarios });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao listar usuários');
    });
}

function buscarUsuarioPorId(req, res) {
  Usuario.findByPk(req.params.id)
    .then((usuario) => {
      if (usuario) {
        res.render('usuario.html', { usuario });
      } else {
        res.status(404).send('Usuário não encontrado');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao buscar usuário');
    });
}

function atualizarUsuario(req, res) {
  Usuario.update(req.body, { where: { id: req.params.id } })
    .then((rowsUpdated) => {
      if (rowsUpdated[0] > 0) {
        res.redirect('/usuarios/' + req.params.id);
      } else {
        res.status(404).send('Usuário não encontrado');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao atualizar usuário');
    });
}

function deletarUsuario(req, res) {
  Usuario.destroy({ where: { id: req.params.id } })
    .then((rowsDeleted) => {
      if (rowsDeleted > 0) {
        res.redirect('/usuarios');
      } else {
        res.status(404).send('Usuário não encontrado');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao deletar usuário');
    });
}

function detalhesUsuario(req, res) {
  Usuario.findByPk(req.params.id)
    .then(usuario => {
      if (!usuario) {
        res.status(404).send('Usuário não encontrado');
      } else {
        res.render('usuario.html', { usuario });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar usuário');
    });
}

module.exports = {
  indexView,
  criarContaView,
  cadastrarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  deletarUsuario,
  detalhesUsuario
};
