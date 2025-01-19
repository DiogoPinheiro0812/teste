const { DataTypes } = require('sequelize');
const sequelize = require('../../connection')

const ReceitaIngrediente = sequelize.define("ReceitaIngrediente",
    {
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        }
    }
);

module.exports = ReceitaIngrediente;