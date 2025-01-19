module.exports = {
    checkToken: async (req, res, next) => {
        // Check if the token was provided
        if (!req.headers.authorization) {
            return res.status(401).send({ message: "Nenhum token de acesso fornecido" });
        }
        next()
    }
}