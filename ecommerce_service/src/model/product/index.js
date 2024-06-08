
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../../config/db');

class ProductModel extends Model {}

ProductModel.init({

    id_product :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_category : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category_products',
            key: 'id_category'
        }
    },

    id_user: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id_user'
        }
    },
    
    nama_product:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    filename_image :
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    path_image :
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    harga:
    {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    is_kupon:
    {
        type: DataTypes.ENUM,
        values: [0,1],
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
    modelName: 'products'
});

module.exports = ProductModel;