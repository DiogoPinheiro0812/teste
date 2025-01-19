const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');

const ReviewPergOpcao = sequelize.define("ReviewPergOpcao", {
    opcaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    reviewId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ReviewPergunta',
            key: 'reviewId'
        }
    },
    perguntaId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ReviewPergunta',
            key: 'perguntaId'
        }
    },
    texto: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ReviewPergOpcao;
