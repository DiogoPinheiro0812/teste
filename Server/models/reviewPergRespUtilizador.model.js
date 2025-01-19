const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');

const ReviewPergRespUtilizador = sequelize.define("ReviewPergRespUtilizador",
{
    utilizadorId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Utilizadors', 
            key: 'utilizadorId'
        }
    },
    reviewId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ReviewPergOpcaos', 
            key: 'reviewId'
        }
    },
    perguntaId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ReviewPergOpcaos', 
            key: 'perguntaId'
        }
    },
    opcaoId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ReviewPergOpcaos', 
            key: 'opcaoId'
        }
    },
    texto: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = ReviewPergRespUtilizador;