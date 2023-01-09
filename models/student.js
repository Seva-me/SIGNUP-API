'use strict';
const {
  Model
} = require('sequelize');
const address = require('./address');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.belongsTo(models.address, {foreignKey: 'address_id'});
      student.belongsTo(models.course,{foreignKey:'course_id'});
    }
  }
  student.init({
    id: {allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    first_name:{type:DataTypes.STRING,allowNull: false},
    last_name:{type:DataTypes.STRING,allowNull: false},
    age:{type:DataTypes.INTEGER,allowNull: false},
    roll_no:{type:DataTypes.INTEGER,unique:true,allowNull: false,},
    school_name: {type:DataTypes.STRING,allowNull: false},
    blood_group: {type:DataTypes.ENUM('A+','B+','O+','O-','A-','B-','AB+','AB-'),allowNull: false},
    address_id: {type:DataTypes.INTEGER,allowNull: true},
    course_id: {type:DataTypes.INTEGER,allowNull: true},
    createdAt: {allowNull: false,type: DataTypes.DATE},
    updatedAt: {allowNull: false,type: DataTypes.DATE}
  }, 
  {
    sequelize,
    modelName: 'student',
    timeStamps: true
  });
  return student;
};