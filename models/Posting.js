const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posting extends Model {}

Posting.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Posting