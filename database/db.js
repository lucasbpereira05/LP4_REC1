const { Client } = require('pg');

const pg = require('pg').Client;

const conexao = new Client({
    user: "postgres",
    password: '01052005',
    host: 'localhost',
    port: "2005",
    database: 'crud_nodejs_db',
});

conexao.connect((error => {
    if(error){
        console.error('A conexão deu erro ' + error);
        return
    }
    console.log('Conectado com sucesso ao Banco de Dados');
}));

module.exports = conexao;