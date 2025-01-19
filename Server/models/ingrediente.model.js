const { DataTypes } = require('sequelize');
const sequelize = require('../../connection')

const Ingrediente = sequelize.define("Ingrediente",
    {
        ingredienteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        unidadeMedida: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }
);

module.exports = Ingrediente;