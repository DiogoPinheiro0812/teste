const express = require('express');
const router = express.Router();

const { createReceita, getAllReceitas, associateRecipeToUser, getReceitasUtilizador, getDetailsReceita, markPassoAsCompleted } = require("../controllers/receitas.controller");
const { verifyUser, verifyAdmin } = require("../middlewares/jwt");
const { checkToken } = require("../middlewares/checkToken");

router.route('/')
    .get(checkToken, verifyAdmin, getAllReceitas)
    .post(checkToken, verifyAdmin, createReceita)

router.route('/me')
    .get(checkToken, verifyUser, getReceitasUtilizador)

router.route('/:receitaId')
    .patch(checkToken, verifyAdmin, associateRecipeToUser)
    .post(checkToken, verifyUser, getDetailsReceita)

router.route('/me/:receitaId/passos/:passoId')
    .patch(checkToken, verifyAdmin, markPassoAsCompleted)

router.all('*', (req, res) => {
    res.status(404).json({ message: '404 Not Found' }); //send a predefined error message
})

//export this router
module.exports = router;