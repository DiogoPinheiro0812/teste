const express = require('express');
const router = express.Router();

const { getReviews, createTemplate, publishTemplate, submitResponses, generateQRCode } = require("../controllers/reviews.controller");
const { verifyUser, verifyAdmin } = require("../middlewares/jwt");
const { checkToken } = require("../middlewares/checkToken");

router.route('/')
    .get(getReviews)
    .post(checkToken, verifyAdmin, createTemplate)

router.route('/:reviewId')
    .patch(checkToken, verifyAdmin, publishTemplate)
    .post(checkToken, verifyUser, submitResponses)

router.route('/:reviewId/qrcode')
    .patch(checkToken, verifyAdmin, generateQRCode)

router.all('*', (req, res) => {
    res.status(404).json({ message: '404 Not Found' }); //send a predefined error message
})

//export this router
module.exports = router;