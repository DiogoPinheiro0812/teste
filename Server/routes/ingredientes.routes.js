const express = require('express');
const router = express.Router();

const { createIngrediente } = require("../controllers/ingredientes.controller");
const { verifyUser, verifyAdmin } = require("../middlewares/jwt");
const { checkToken } = require("../middlewares/checkToken");

router.route('/')
    .post(checkToken, verifyAdmin, createIngrediente)

router.all('*', (req, res) => {
    res.status(404).json({ message: '404 Not Found' }); //send a predefined error message
})

//export this router
module.exports = router;