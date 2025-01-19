const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');

const ReceitaUtilizador = sequelize.define("ReceitaUtilizador",
    {
        receitaId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Receita',
                key: 'receitaId'
            }
        },
        utilizadorId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Utilizadors',
                key: 'utilizadorId'
            }
        }
    }
);

module.exports = ReceitaUtilizador;