const EntradaEstoque = require('../models/entradaestoque');

function cadastrarEntrada(req, res) {
    let entrada = {
        id_produto: req.body.id_produto,
        data_validade: req.body.data_validade,
        data_saida: req.body.data_saida,
        data_entrada: req.body.data_entrada,
        quantidade_minima: req.body.quantidade_minima,
        quantidade_estoque: req.body.quantidade_estoque,
        preco: req.body.preco,
        descricao: req.body.descricao,
        nome: req.body.nome,
        lote: req.body.lote,
        localizacao_estoque: req.body.localizacao_estoque,
        quantidade_total: req.body.quantidade_total
    };

    EntradaEstoque.create(entrada)
        .then(() => {
            let sucesso = true;
            res.json({ sucesso });
        })
        .catch((err) => {
            console.log(err);
            let erro = true;
            res.json({ erro });
        });
}

function listarEntradas(req, res) {
    EntradaEstoque.findAll()
        .then((entradas) => {
            res.json(entradas); 
        })
        .catch((err) => {
            res.status(500).json({ error: 'Erro ao buscar entradas de estoque' });
        });
}

module.exports = {
    cadastrarEntrada,
    listarEntradas
};
