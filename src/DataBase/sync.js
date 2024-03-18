const connection = require('./connection.js');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department.js');
const city = require('../Models/city.js');

//JSON
const departmentjson = require('./jsonFiles/departmentjson.js');
const cityjson = require('./jsonFiles/cityjson.js');


async function sync(){
    //Foreing Key restaurant - product
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    });

    //Foreing Key department - city
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    });

    //Foreing Key city - restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });


    await connection.sync({force: false})
    .then(()=>{
        console.log('Synchronized DataBase');
    })
    .catch((error) =>{
        console.error('Error al sincronizar la base de datos ' + error);
    });

    
    // create json
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();