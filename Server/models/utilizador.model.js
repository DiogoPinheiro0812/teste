const { DataTypes } = require('sequelize');
const sequelize = require('../../connection')
const bcrypt = require('bcrypt')

const Utilizador = sequelize.define("Utilizador",
    {
        utilizadorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 30]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                const hashedPassword = bcrypt.hashSync(value,10)
                this.setDataValue('password',hashedPassword)
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        sobreMim: DataTypes.STRING,
        img: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'Utilizador'
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                isIn: [[true, false]]
            }
        },  
    },
);

module.exports = Utilizador;