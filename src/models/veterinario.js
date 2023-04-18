const Sequelize = require('sequelize')
const conexao = require('../database')

const Veterinario = conexao.define('veterinario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     nome: {
        type: Sequelize.STRING,
        allowNull: false
     }
})

module.exports = Veterinario