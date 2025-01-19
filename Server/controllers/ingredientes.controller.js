const {handleServerError} = require('../utilities/errors');
const { Ingrediente } = require('../models/index')
const { getItems } = require('../utilities/getItems');

module.exports = {
    createIngrediente: async (req, res) => {
        try {
            const { nome, img } = req.body;
    
            if (!nome) {
                return res.status(400).send({ message: "O nome do ingrediente é obrigatório." });
            }
    
            const ingrediente = await Ingrediente.create({ nome, img, unidadeMedida });
            res.status(201).send({ message: "Ingrediente criado com sucesso.", ingrediente });
        } catch (error) {
            handleServerError(error, res);
        }
    },
}
