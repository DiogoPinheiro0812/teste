const express = require('express');
const QRCode = require('qrcode');
const { Review, ReviewPergRespUtilizador } = require('../models/index');
const { getItems } = require("../utilities/getItems");
const { handleNotFoundError, handleServerError, handleConflictError, handleBadRequest } = require('../utilities/errors');

module.exports = {
    getReviews: async (req, res) => {
        try {
            const reviews = await getItems(Review, { attributes: ['reviewId', 'titulo', 'data', 'numGrupos'] })
            return res.status(200).send(
                {
                    pagination: reviews.pagination,
                    data: reviews.data,
                });
        } catch (error) {
            handleServerError(error, res)
        }
    },
    createTemplate: async (req, res) => {
        try {
            const { titulo, data, numGrupos, perguntas } = req.body;
            if (!titulo || !data || numGrupos <= 0 || !perguntas || !Array.isArray(perguntas)) {
                handleBadRequest(res, "Dados Inválidos")
            }
            const review = await Review.create({
                titulo,
                data,
                numGrupos
            });

            for (const pergunta of perguntas) {
                await ReviewPergunta.create({
                    reviewId: review.reviewId,
                    tipoPergunta: pergunta.tipoPergunta,
                    texto: pergunta.texto
                });

                if (pergunta.opcoes) {
                    for (const opcao of pergunta.opcoes) {
                        await ReviewPergOpcao.create({
                            reviewId: review.reviewId,
                            perguntaId: pergunta.perguntaId,
                            texto: opcao
                        });
                    }
                }
            }

            res.status(201).send({ message: "Template criado com sucesso", review });
        } catch (error) {
            handleServerError(error, res);
        }
    },
    publishTemplate: async (req, res) => {
        try {
            const { reviewId } = req.params;

            const review = await Review.findByPk(reviewId);
            if (!review) {
                handleNotFoundError(res, "Template não encontrado")
            }

            if (review.isPublished == true) {
                handleConflictError(res, "Template já foi publicado")
            }

            review.isPublished = true;
            await review.save();

            res.status(200).send({ message: "Template publicado com sucesso" });
        } catch (error) {
            handleServerError(error, res);
        }
    },
    submitResponses: async (req, res) => {
        try {
            const { reviewId } = req.params
            const { respostas } = req.body;
            const utilizadorId = res.locals.utilizadorId;

            if (!reviewId || !respostas || !Array.isArray(respostas)) {
                handleBadRequest(res, "Dados Inválidos")
            }

            for (const resposta of respostas) {
                await ReviewPergRespUtilizador.create({
                    utilizadorId,
                    reviewId,
                    perguntaId: resposta.perguntaId,
                    opcaoId: resposta.opcaoId,
                    texto: resposta.texto || null
                });
            }

            res.status(201).send({ message: "Respostas enviadas com sucesso" });
        } catch (error) {
            handleServerError(error, res);
        }
    },
    generateQRCode: async (req, res) => {
        try {
            const { reviewId } = req.params;
            const review = await Review.findByPk(reviewId);

            if (!review) {
                handleNotFoundError(res, "Review Não Encontrado")
            }

            if (!review.isPublished) {
                handleConflictError(res, "Review Não Está Publicado")
            }

            const url = `forkfolio://reviews/${reviewId}`;
            const qrCode = await QRCode.toDataURL(url);

            res.status(200).send({ qrCode });
        } catch (error) {
            handleServerError(error, res);
        }
    }
}