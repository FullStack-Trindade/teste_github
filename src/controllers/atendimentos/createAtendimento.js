const Atendimento = require("../../models/atendimento")
const Pet = require("../../models/pet")

async function createAtendimento(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const data = {
            pet_id: request.body.pet_id,
            veterinario_id: request.body.veterinario_id
        }

        if(!data.pet_id || !data.veterinario_id) {
            return response.status(400).json({message: 'Ids ausentes'})
        }

        const petInDatabase = await Pet.findByPk(data.pet_id)

        if(!petInDatabase) {
            return response.status(404).json({message: 'Pet nao existe'})
        }

       const atendimento = await Atendimento.create(data)

       //atualizar o contador do médico e do paciente

       // findOne para pegar o paciente 
       // atualiza o total_de_atendimentos do paciente
       // atualiza a coluna status para ATENDIDO

       // findOne para pegar o médico 
       // atualiza o total_de_atendimentos do médico

        response.json(atendimento)
    
    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'Não possivel processar a solicitacao'})
    }

}

module.exports = createAtendimento