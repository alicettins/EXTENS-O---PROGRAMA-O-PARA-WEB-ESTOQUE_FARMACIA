const Transacao = require('../models/transacao');

async function cadastrarTransacao(req, res) {
    try {
        let novaTransacao = {
            tipo_transacao: req.body.tipo_transacao,
            data_hora_transacao: req.body.data_hora_transacao,
            valor_total: req.body.valor_total,
            quantidade_itens: req.body.quantidade_itens,
            produtos_comprados: req.body.produtos_comprados
        };

        const transacao = await Transacao.create(novaTransacao);
        res.status(201).json({ transacao });
    } catch (error) {
        console.error('Erro ao cadastrar transação:', error);
        res.status(500).json({ error: 'Erro ao cadastrar transação' });
    }
}

async function listarTransacoes(req, res) {
    try {
        const transacoes = await Transacao.findAll();
        res.json(transacoes);
    } catch (error) {
        console.error('Erro ao buscar transações:', error);
        res.status(500).json({ error: 'Erro ao buscar transações' });
    }
}

async function exibirFormularioEdicao(req, res) {
    try {
        const transacao = await Transacao.findByPk(req.params.id);
        if (!transacao) {
            return res.status(404).send('Transação não encontrada');
        }
        res.render('transacao-editar.html', { transacao });
    } catch (error) {
        console.error('Erro ao buscar transação para edição:', error);
        res.status(500).send('Erro ao buscar transação para edição');
    }
}

async function atualizarTransacao(req, res) {
    try {
        const transacao = await Transacao.findByPk(req.params.id);
        if (!transacao) {
            return res.status(404).send('Transação não encontrada');
        }

        transacao.tipo_transacao = req.body.tipo_transacao;
        transacao.data_hora_transacao = req.body.data_hora_transacao;
        transacao.valor_total = req.body.valor_total;
        transacao.quantidade_itens = req.body.quantidade_itens;
        transacao.produtos_comprados = req.body.produtos_comprados;

        await transacao.save();
        res.redirect('/listar_transacoes');
    } catch (error) {
        console.error('Erro ao atualizar transação:', error);
        res.status(500).send('Erro ao atualizar transação');
    }
}

async function excluirTransacao(req, res) {
    try {
        const transacao = await Transacao.findByPk(req.params.id);
        if (!transacao) {
            return res.status(404).send('Transação não encontrada');
        }

        await transacao.destroy();
        res.redirect('/listar_transacoes');
    } catch (error) {
        console.error('Erro ao excluir transação:', error);
        res.status(500).send('Erro ao excluir transação');
    }
}

async function detalhesTransacao(req, res) {
    try {
        const transacao = await Transacao.findByPk(req.params.id);
        if (!transacao) {
            return res.status(404).send('Transação não encontrada');
        }
        res.render('transacao-detalhes.html', { transacao });
    } catch (error) {
        console.error('Erro ao buscar detalhes da transação:', error);
        res.status(500).send('Erro ao buscar detalhes da transação');
    }
}

module.exports = {
    cadastrarTransacao,
    listarTransacoes,
    exibirFormularioEdicao,
    atualizarTransacao,
    excluirTransacao,
    detalhesTransacao
};
