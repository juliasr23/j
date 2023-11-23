const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('produtos', {
  ti: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  de: {
    type: DataTypes.STRING,
  },
  pre: {
    type: DataTypes.STRING,
  },
  qua: {
    type: DataTypes.BOOLEAN,
  },
  poleg: {
    type: DataTypes.STRING,
  },
  tipotecn: {
    type: DataTypes.STRING,
  },
  infor: {
    type: DataTypes.STRING,
  },

})

module.exports = produtos
