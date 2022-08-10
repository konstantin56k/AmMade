const Sequelize = require('sequelize');
const { DataTypes: {STRING, UUID, UUIDV4, BOOLEAN } } = Sequelize;
const db = require('../db');

const User = db.define('user', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
  
    username: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
  
    firstName: {
        type: STRING
    },
  
    lastName: {
        type: STRING
    },
  
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
  
    phoneNumber: {
        type: STRING
    },
  
    address: {
        type: STRING
    },
  
    password: {
        type: STRING,
        allowNull: false
    },
  
    isAdmin: {
        type: BOOLEAN  
    }
});
  
module.exports = {
    models: {
        User
    }
};