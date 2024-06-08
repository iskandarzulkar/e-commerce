
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../../config/db');
const ProductModel = require('../product');

class CategoryProductModel extends Model {}

CategoryProductModel.init({
    id_category : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_user: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
          }
    },
    
    nama_category:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    status:
    {
        type: DataTypes.ENUM,
        values: [0,1],
        allowNull: true
    }
    
},{
    sequelize,
    modelName: 'category_products'
});

CategoryProductModel.hasMany(ProductModel, { foreignKey: 'id_category' });
ProductModel.belongsTo(CategoryProductModel, { foreignKey: 'id_category' });

module.exports = CategoryProductModel;