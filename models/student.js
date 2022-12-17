'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student.init({
    student_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {type:DataTypes.STRING,allowNull: false},
    marks: {type:DataTypes.STRING,allowNull: false},
    subject: {type:DataTypes.STRING,allowNull: false},
    age: {type:DataTypes.INTEGER,allowNull: false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};