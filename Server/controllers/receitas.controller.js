const {handleServerError} = require('../utilities/errors');
const { Receita, ReceitaIngrediente, Ingrediente, PassoReceita, ReceitaUtilizador, UnidadeMedida } = require('../models/index')
const { getItems } = require('../utilities/getItems');

module.exports = {

    getAllReceitas: async (req, res) => {
        try {
            const { limit, offset, nome } = req.query;

            const receitas = await getItems(Receita, {
                where: nome ? { nome: { [Op.like]: `%${nome}%` } } : {},
                limit,
                offset,
                order: [['nome', 'ASC']],
            });

            res.status(200).send(receitas);
        } catch (error) {
            handleServerError(error, res);
        }
    },
    createReceita: async (req, res) => {
        try {
            const { nome, img, ingredientes, passos } = req.body;
    
            if (!nome) {
                return res.status(400).send({ message: "Nome da receita é obrigatório" });
            }
    
            const receita = await Receita.create({ nome, img });
    
            // Associar ingredientes e unidades de medida
            if (ingredientes && Array.isArray(ingredientes)) {
                for (const ingrediente of ingredientes) {
                    await ReceitaIngrediente.create({
                        receitaId: receita.receitaId,
                        ingredienteId: ingrediente.ingredienteId,
                        quantidade: ingrediente.quantidade
                    });
                }
            }
    
            // Criar passos da receita
            if (passos && Array.isArray(passos)) {
                for (const passo of passos) {
                    await PassoReceita.create({
                        receitaId: receita.receitaId,
                        desc: passo.desc,
                        numPasso: passo.numPasso,
                        isChecked: false,
                    });
                }
            }
    
            res.status(201).send({ message: "Receita criada com sucesso", receita });
        } catch (error) {
            handleServerError(error, res);
        }
    },    

    // Associar uma receita a um utilizador (após o review)
    associateRecipeToUser: async (req, res) => {
        try {
            const { receitaId } = req.params;
            const utilizadorId = res.locals.utilizadorId

            await ReceitaUtilizador.create({ receitaId, utilizadorId });

            res.status(200).send({ message: "Receita associada ao utilizador com sucesso" });
        } catch (error) {
            handleServerError(error, res);
        }
    },

    // Obter todas as receitas de um utilizador
    getReceitasUtilizador: async (req, res) => {
        try {
            const utilizadorId = res.locals.utilizadorId

            const receitas = await getItems(ReceitaUtilizador, {
                where: { utilizadorId },
                include: Receita,
            });

            res.status(200).send(receitas);
        } catch (error) {
            handleServerError(error, res);
        }
    },

    // Obter detalhes de uma receita (incluindo ingredientes e passos)
    getDetailsReceita: async (req, res) => {
        try {
            const { receitaId } = req.params;

            const receita = await Receita.findByPk(receitaId, {
                include: [
                    {
                        model: ReceitaIngrediente,
                        include: Ingrediente,
                    },
                    PassoReceita,
                ],
            });

            if (!receita) {
                return res.status(404).send({ message: "Receita não encontrada" });
            }

            res.status(200).send(receita);
        } catch (error) {
            handleServerError(error, res);
        }
    },
    // Marcar passo como concluído
    markPassoAsCompleted: async (req, res) => {
        try {
            const { passoId } = req.params;

            const passo = await PassoReceita.findByPk(passoId);
            if (!passo) {
                return res.status(404).send({ message: "Passo não encontrado" });
            }

            passo.isChecked = true;
            await passo.save();

            res.status(200).send({ message: "Passo concluído com sucesso", passo });
        } catch (error) {
            handleServerError(error, res);
        }
    }     
}
