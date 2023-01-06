'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.hasMany(models.student,{foreignKey:'course_id'});
    }
  }
  course.init({
    id: {allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    course_name: { type:DataTypes.STRING,allowNull: false},
    course_price:{ type:DataTypes.STRING,allowNull: false},
    createdAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')},
    updatedAt: {allowNull: false,type: DataTypes.DATE,defaultValue: sequelize.literal('NOW()')}
  }, 
  {
    sequelize,
    modelName: 'course',
  });
  return course;
};