// LOADING ENVIRONMENT DETAILS FROM CONFIG
require('dotenv').config();
const { Sequelize } = require('sequelize'); //IMPORTS SEQUELIZE LIBRARY
const { DataTypes } = require('sequelize'); //IMPORTS THE DATATYPES WHICH ARE IN SEQUELIZE LIBRARY

const dbName = process.env.DB_NAME
console.log("VARIABLE",dbName);
console.log("ALL ENV",process.env);

// INSTANCE OF SEQUELIZE
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    
    host: process.env.DB_HOST,
    dialect: 'mysql',// TYPE OF DATABASE USED 
    logging: false, // STOPS THE LOG
  }
);
console.log("DATABASE" , process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

//TEST CONNECTION IS SUCCESSFUL
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;//TO IMPORT THIS SEQUELIZE IN OTHER FILES
