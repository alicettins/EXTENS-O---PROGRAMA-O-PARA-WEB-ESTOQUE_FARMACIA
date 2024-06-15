const Produto = require('../models/produto'); 

function indexView(req, res) {
    res.render('index.html');
}

function cadastrarProdutoView(req, res) {
    res.render('produto_cadastro.html');
}

function cadastrarProduto(req, res) {
    let produto = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        quantidade_minima: req.body.quantidade_minima,
        quantidade_estoque: req.body.quantidade_estoque,
        preco: req.body.preco,
        data_validade: req.body.data_validade,
        data_entrada: req.body.data_entrada,
        data_saida: req.body.data_saida
    }

    Produto.create(produto).then(() => {
        res.redirect('/produtos?cadastrar_produto=true');
    }).catch((err) => {
        console.log(err);
        res.redirect('/produtos?cadastrar_produto=false');
    });
}

async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.findAll();
        res.render('produtos.html', { produtos });
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar produtos');
    }
}

async function editarProdutoView(req, res) {
    const id = req.params.id;
    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            res.status(404).send('Produto não encontrado');
            return;
        }
        res.render('produto_edicao.html', { produto });
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar produto para edição');
    }
}

async function atualizarProduto(req, res) {
    const id = req.params.id;
    try {
        await Produto.update(req.body, {
            where: { id: id }
        });
        res.redirect('/produtos?atualizar_produto=true');
    } catch (err) {
        console.log(err);
        res.redirect('/produtos?atualizar_produto=false');
    }
}

async function excluirProduto(req, res) {
    const id = req.params.id;
    try {
        await Produto.destroy({
            where: { id: id }
        });
        res.redirect('/produtos?excluir_produto=true');
    } catch (err) {
        console.log(err);
        res.redirect('/produtos?excluir_produto=false');
    }
}

module.exports = {
    indexView,
    cadastrarProdutoView,
    cadastrarProduto,
    listarProdutos,
    editarProdutoView,
    atualizarProduto,
    excluirProduto
};
