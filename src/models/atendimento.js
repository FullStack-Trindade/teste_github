const Sequelize = require('sequelize')
const conexao = require('../database')
const Pet = require('./pet')
const Veterinario = require('./veterinario')

const Atendimento = conexao.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false
     },
     veterinario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
     }
   
})

Atendimento.belongsTo(Pet)
Atendimento.belongsTo(Veterinario)

module.exports = Atendimento