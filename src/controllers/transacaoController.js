const Transacao = require('../models/transacao');

async function cadastrarTransacao(req, res) {
    try {
        let novaTransacao = {
            id_transacao: req.body.id_transacao,
            data_hora_transacao: req.body.data_hora_transacao,
            tipo_transacao: req.body.tipo_transacao,
            valor_total: req.body.valor_total,
            quantidade_itens: req.body.quantidade_itens,
            produtos_comprados: req.body.produtos_comprados
        };
        
        await Transacao.create(novaTransacao);
        let sucesso = true;
        res.render("index.html", { sucesso });
    } catch (error) {
        console.error('Erro ao cadastrar transação:', error);
        let erro = true;
        res.render("index.html", { erro });
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

module.exports = {
    cadastrarTransacao,
    listarTransacoes
};
