const sequelize = require('../../connection')
const { DataTypes } = require('sequelize');

const ReviewPergunta = sequelize.define("ReviewPergunta",
    {
        perguntaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        reviewId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Reviews',
                key: 'reviewId'
            }
        },
        tipoPergunta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        texto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = ReviewPergunta;