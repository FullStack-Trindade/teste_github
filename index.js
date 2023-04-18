const express = require('express')
const conexao = require('./src/database')
const Pet = require('./src/models/pet')
const Veterinario = require('./src/models/veterinario')

const Atendimento = require('./src/models/atendimento')

const createPet = require('./src/controllers/pets/createPet')
const findAllPet = require('./src/controllers/pets/findAllPet')
const findOnePet = require('./src/controllers/pets/findOnePet')
const deletePet = require('./src/controllers/pets/deletePet')
const updateStatusPet = require('./src/controllers/pets/updateStatusPet')
const createAtendimento = require('./src/controllers/atendimentos/createAtendimento')

const app = express()
app.use(express.json()) // obrigatório

app.post('/api/pets', createPet )
app.get('/api/pets', findAllPet )
app.get('/api/pets/:id', findOnePet)
app.delete('/api/pets/:id', deletePet)
app.put('/api/pets/:id/status', updateStatusPet)

app.post('/api/atendimentos', createAtendimento)

conexao.sync({alter: true})

app.listen(6666, () => {
    console.log("Projeto online")
})