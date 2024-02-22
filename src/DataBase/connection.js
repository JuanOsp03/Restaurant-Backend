const { Sequelize } = require('sequelize'); 

var dataBase = 'restaurantdb'; 
var userName = 'postgres'; 
var password = '3641'; 


const connection = new Sequelize(dataBase, userName, password, { 
    host: 'localhost',
    dialect: 'postgres' 
}); 

module.exports = connection;