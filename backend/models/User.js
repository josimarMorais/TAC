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
    adress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complement: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});
// Criação da tabela
User.sync();
//Verifica se há alguma diferença na tabela, atualiza conforme model.

module.exports = User;