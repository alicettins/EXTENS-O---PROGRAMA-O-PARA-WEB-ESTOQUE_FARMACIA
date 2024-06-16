const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const produtoRoutes = require('./src/routes/produtoRoutes');
const db = require('./src/db');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use('/usuarios', usuarioRoutes);
app.use('/produtos', produtoRoutes);

db.sync({ force: false }) 
    .then(() => {
        console.log('Banco de dados sincronizado');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });
