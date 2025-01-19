const { Utilizador } = require("../models/index");
const { compareHash } = require("../utilities/bcrypt");
const { handleInvalidRequest, handleBadRequest, handleServerError, handleSequelizeValidationError, handleConflictError } = require("../utilities/errors");
const { SignToken } = require("../middlewares/jwt");

module.exports = {
    login: async (req, res) => {
        // await Utilizador.create({
        //     nome: 'teste',
        //     email: 'teste@teste123.com',
        //     password: '123',
        //     role: 'admin'
        // })
        try {
            const utilizador = await Utilizador.findOne({ where: { nome: req.body.nome } });
            if (req.body.password && req.body.nome) {
                //Verifies if the password matches the Utilizador's password'
                const passwordIsValid = await compareHash(utilizador.password, req.body.password);
                if (passwordIsValid) {
                    //Calls the SignToken function that creates the token
                    const token = await SignToken(utilizador.utilizadorId);
                    return res.status(201).send({ accessToken: token });
                } else {
                    handleInvalidRequest(res, "Credenciais Inválidas")
                }
            } else {
                handleBadRequest(res, "Por favor preencha todos os campos necessários.")
            }
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                // Capture Sequelize Validation Errors
                handleSequelizeValidationError(error, res)
            }
            handleServerError(error, res)
        }
    },
    register: async (req, res) => {
        try {
            if (req.body.password && req.body.nome) {
                if (await Utilizador.findOne({
                    where: {
                        nome: req.body.nome
                    }
                })) {
                    handleConflictError(res, "Utilizador com este nome já existe");
                } else {
                    const utilizador = await Utilizador.create({
                        nome: req.body.nome,
                        email: req.body.email,
                        password: req.body.password,
                    });
                    const token = await SignToken(utilizador.utilizadorId);
                    return res.status(201).send({ message: "Registado com Sucesso", token: token })
                }
            } else {
                handleBadRequest(res, "Por favor preencha todos os campos necessários")
            }
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                handleSequelizeValidationError(error, res)
            }
            handleServerError(error, res)
        }
    }
}