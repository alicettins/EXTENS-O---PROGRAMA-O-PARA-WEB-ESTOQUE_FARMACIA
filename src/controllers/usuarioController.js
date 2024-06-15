const Usuario = require('../models/usuario');

function cadastrarUsuario(req, res) {
    const { email, senha, login, id_funcionario, cargo, nome } = req.body;
    const novoUsuario = new Usuario({ email, senha, login, id_funcionario, cargo, nome });

    novoUsuario.save()
        .then(() => {
            res.redirect('/?cadastrar_usuario=true');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/?cadastrar_usuario=false');
        });
}

function listarUsuarios(req, res) {
    Usuario.findAll()
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao listar usuários' });
        });
}

function buscarUsuarioPorId(req, res) {
    const { id } = req.params;

    Usuario.findByPk(id)
        .then(usuario => {
            if (!usuario) {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                res.json(usuario);
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar usuário por ID' });
        });
}

function atualizarUsuario(req, res) {
    const { id } = req.params;
    const { email, senha, login, id_funcionario, cargo, nome } = req.body;

    Usuario.update({ email, senha, login, id_funcionario, cargo, nome }, {
        where: { id: id }
    })
        .then(() => {
            res.json({ message: 'Usuário atualizado com sucesso' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        });
}

function deletarUsuario(req, res) {
    const { id } = req.params;

    Usuario.destroy({
        where: { id: id }
    })
        .then(() => {
            res.json({ message: 'Usuário deletado com sucesso' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        });
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario
};
