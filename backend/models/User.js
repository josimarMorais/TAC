const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    /*id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        PrimaryKey: true,
        allowNull: false

    },*/
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});
// Criação da tabela
User.sync();
//Verifica se há alguma diferença na tabela, atualiza conforme model.

module.exports = User;