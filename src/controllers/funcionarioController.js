const Funcionario = require('../models/funcionario');

async function indexView(req, res) {
    try {
        const funcionarios = await Funcionario.findAll();
        res.render('funcionario.html', { funcionarios });
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários');
    }
}

function criarContaView(req, res) {
    res.render('funcionario-novo.html');
}

async function cadastrarFuncionario(req, res) {
    try {
        let novoFuncionario = {
            nome: req.body.nome,
            cargo: req.body.cargo,
            salario: req.body.salario,
            data_admissao: req.body.data_admissao
        };

        await Funcionario.create(novoFuncionario);
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        res.status(500).send('Erro ao cadastrar funcionário');
    }
}

async function exibirFormularioEdicao(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-editar.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar funcionário para edição:', error);
        res.status(500).send('Erro ao buscar funcionário para edição');
    }
}

async function atualizarFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        funcionario.nome = req.body.nome;
        funcionario.cargo = req.body.cargo;
        funcionario.salario = req.body.salario;
        funcionario.data_admissao = req.body.data_admissao;

        await funcionario.save();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao atualizar funcionário:', error);
        res.status(500).send('Erro ao atualizar funcionário');
    }
}

async function exibirConfirmacaoExclusao(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-excluir.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar funcionário para exclusão:', error);
        res.status(500).send('Erro ao buscar funcionário para exclusão');
    }
}

async function excluirFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        await funcionario.destroy();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao excluir funcionário:', error);
        res.status(500).send('Erro ao excluir funcionário');
    }
}

async function detalhesFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-detalhes.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar detalhes do funcionário:', error);
        res.status(500).send('Erro ao buscar detalhes do funcionário');
    }
}

module.exports = {
    indexView,
    criarContaView,
    cadastrarFuncionario,
    exibirFormularioEdicao,
    atualizarFuncionario,
    exibirConfirmacaoExclusao,
    excluirFuncionario,
    detalhesFuncionario
};
