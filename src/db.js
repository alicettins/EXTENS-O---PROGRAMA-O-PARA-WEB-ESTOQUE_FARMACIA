const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nome_do_seu_banco', 'seu_usuario', 'sua_senha', {
    host: 'localhost', 
    dialect: 'mysql', 
    logging: false,   
});

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

module.exports = {
    sequelize,
    testarConexao
};
