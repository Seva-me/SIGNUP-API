'use strict';
const {
  Model
} = require('sequelize');
// const { NOT } = require('sequelize/types/deferrable');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {type:DataTypes.STRING,allowNull: false},
    lastName:{type :DataTypes.STRING,allowNull: false},
    email:{type:DataTypes.STRING,unique:true,allowNull: false},
    password:{type:DataTypes.STRING,allowNull: false,},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
    timestamps: true
  });
  return user;
};