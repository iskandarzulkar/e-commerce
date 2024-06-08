
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../../config/db');

class OrdersModel extends Model {}

OrdersModel.init({

    id_orders :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_product : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id_product'
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
    
    no_orders: 
    {
        type : DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'order_histories',
            key: 'no_orders'
        }
    },

    total_harga:
    {
        type: DataTypes.BOOLEAN,
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
    modelName: 'orders'
});

module.exports = OrdersModel;