const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./src/db'); 

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
}));

// Rotas
app.use('/', require('./src/routes/funcionarioRoutes'));
app.use('/', require('./src/routes/produtoRoutes'));
app.use('/', require('./src/routes/autenticacaoRoutes'));


// Sincronização do banco de dados
db.sync()
    .then(() => {
        const app_port = 8080;
        app.listen(app_port, () => {
            console.log('App rodando na porta ' + app_port);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

   