const Sequelize = require('sequelize');

const conexao = new Sequelize("plataforma", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

conexao.authenticate().then(function () {
    console.log("Conexão com o banco realizada com sucesso!")
}).catch(function () {
    console.log("Ação não realizada!")
});

module.exports = conexao;