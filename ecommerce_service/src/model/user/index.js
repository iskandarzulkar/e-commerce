
const {DataTypes, Model} = require('sequelize');
const sequelize          = require('../../config/db');
const ProductModel       = require("../product");

class UserModel extends Model {}

UserModel.init({
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    lastname:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    username:{
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    email:
    {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password:
    {
        type : DataTypes.STRING,
        allowNull: false
    },

    address:
    {
        type : DataTypes.STRING,
        allowNull: false
    },

    role:
    {
        type: DataTypes.ENUM,
        values: [1,2],
        allowNull: true
    },

    status:
    {
        type: DataTypes.ENUM,
        values: [0,1],
        allowNull: true
    }
    
},{
    sequelize,
    modelName: 'users'
});

// UserModel.hasMany(ProductModel, { foreignKey: 'id_user' });
// ProductModel.belongsTo(UserModel, { foreignKey: 'id_user' });

module.exports = UserModel;