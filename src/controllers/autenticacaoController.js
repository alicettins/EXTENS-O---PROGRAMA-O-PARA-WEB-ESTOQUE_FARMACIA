const Funcionario = require('../models/funcionario');

async function autenticar(req, res) {
    try {
        const { email, senha } = req.body;

        const funcionario = await Funcionario.findOne({ where: { email, senha } });

        if (funcionario !== null) {
            req.session.autorizado = true;
            req.session.funcionario = funcionario;

            res.redirect('/funcionario/home');
        } else {
            let erro_autenticacao = true;
            res.render('index.html', { erro_autenticacao });
        }
    } catch (error) {
        console.error('Erro ao autenticar funcionário:', error);
        res.status(500).send('Erro interno ao autenticar funcionário');
    }
}

function verificarAutenticacao(req, res, next) {
    if (req.session.autorizado) {
        console.log("Funcionário autorizado");
        next();
    } else {
        console.log("Funcionário NÃO autorizado");
        res.redirect('/');
    }
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    verificarAutenticacao,
    sair
};
