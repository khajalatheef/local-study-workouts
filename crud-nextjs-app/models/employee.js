import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db';

//DEFINING THE MODEL
const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'employees', // CUSTOMISED TABLE NAME
    timestamps: false, // DISABLES CREATED AT OR UPDATED DATE
    freezeTableName: true, // SEQUELIZE MODEL NAME IS NOT TO CHANGE BY PLURALIZING
});

module.exports = Employee;
