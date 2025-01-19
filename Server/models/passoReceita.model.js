const { DataTypes } = require('sequelize');
const sequelize = require('../../connection')

const PassoReceita = sequelize.define("PassoReceita",
    {
        passoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        isChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numPasso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

module.exports = PassoReceita;