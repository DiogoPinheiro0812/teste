const jwt = require("jsonwebtoken");
const { Utilizador } = require("../models/index");
const secret = process.env.SECRET;

module.exports = {
    verifyUser: async (req, res, next) => {
        try {
            const bearer = req.headers.authorization.split(" ")[1];
            const payload = jwt.verify(bearer, secret);
            if (!payload) {
                return res.status(401).send({ message: "Token falhou verificação" });
            }
            const utilizador = await Utilizador.findByPk(payload.id);
            if (utilizador != null) {
                res.locals.utilizadorId = payload.id;
                next();
            } else {
                return res.status(401).send({ message: "Credenciais Inválidas" });
            }
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).send({ message: "O seu token expirou! Por favor faça login de novo." });
            }
        }
    },
    verifyAdmin: async (req, res, next) => {
        try {
            const bearer = req.headers.authorization.split(" ")[1];
            const payload = jwt.verify(bearer, secret);
            const utilizador = await Utilizador.findByPk(payload.id);
            if (utilizador != null) {
                if (utilizador.role == 'admin') {
                    res.locals.utilizadorId = payload.id;
                    next();
                } else {
                    return res.status(403).send({ message: "Esta ação requer privilégios de administrador." });
                }
            } else {
                return res.status(404).send({ message: "Utilizador não encontrado" });
            }
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).send({ message: "O seu token expirou! Por favor faça login de novo." });
            }
        }
    },
    SignToken: async (utilizadorId) => {
        const payload = { id: utilizadorId };
        return jwt.sign(payload, secret, { expiresIn: "24h"});
    }
};
