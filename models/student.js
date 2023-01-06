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
    roll:{type:DataTypes.INTEGER,unique:true,allowNull: false,},
    school_name: {type:DataTypes.STRING,allowNull: false},
    blood_group: {type:DataTypes.STRING,allowNull: false},
    createdAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')},
    updatedAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')}
  }, 
  {
    sequelize,
    modelName: 'student',
  });
  // const student=sequelize.define('student');
  // const adddress=
  // student.associate = function(models){student.hasOne(models.address, {foreignkey:'student_id'})};
  return student;
};