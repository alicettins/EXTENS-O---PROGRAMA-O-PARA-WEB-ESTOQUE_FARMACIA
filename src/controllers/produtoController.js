const Produto = require('../models/produto');

function cadastrarProduto(req, res) {
    const { nome, descricao, quantidade, preco, data_validade, data_entrada, data_saida } = req.body;
    const novoProduto = new Produto({
        nome,
        descricao,
        quantidade_minima: quantidade,
        quantidade_estoque: quantidade,
        preco,
        data_validade,
        data_entrada,
        data_saida
    });

    novoProduto.save()
        .then(() => {
            res.redirect('/produtos?cadastrar_produto=true');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/produtos?cadastrar_produto=false');
        });
}

async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.findAll();
        res.render('produtos.html', { produtos });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar produtos');
    }
}

async function buscarProdutoPorId(req, res) {
    const { id } = req.params;

    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            res.status(404).json({ error: 'Produto não encontrado' });
        } else {
            res.json(produto);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar produto por ID' });
    }
}

async function atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, descricao, quantidade, preco, data_validade, data_entrada, data_saida } = req.body;

    try {
        await Produto.update({ nome, descricao, quantidade_minima: quantidade, quantidade_estoque: quantidade, preco, data_validade, data_entrada, data_saida }, {
            where: { id: id }
        });
        res.redirect('/produtos?atualizar_produto=true');
    } catch (err) {
        console.error(err);
        res.redirect('/produtos?atualizar_produto=false');
    }
}

async function excluirProduto(req, res) {
    const { id } = req.params;

    try {
        await Produto.destroy({
            where: { id: id }
        });
        res.redirect('/produtos?excluir_produto=true');
    } catch (err) {
        console.error(err);
        res.redirect('/produtos?excluir_produto=false');
    }
}

module.exports = {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProduto,
    excluirProduto
};
