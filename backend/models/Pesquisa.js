const Sequelize = require('sequelize');
const db = require('./db');

//Define a tabela de pesquisa e suas colunas, conforme documentação do sequelize
const Pesquisa = db.define('pesquisa', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tcle: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//Verifica se há alguma diferença na tabela, atualiza conforme model.
Pesquisa.sync();


module.exports = Pesquisa;