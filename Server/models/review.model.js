const { DataTypes } = require('sequelize');
const sequelize = require('../../connection');

const Review = sequelize.define("Review",
    {
        reviewId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        numGrupos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
);

module.exports = Review;