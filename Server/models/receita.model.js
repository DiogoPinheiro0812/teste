const { DataTypes } = require('sequelize');
const sequelize = require('../../connection')


const Receita = sequelize.define("Receita",
    {
        receitaId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
);

module.exports = Receita;