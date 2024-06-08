
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../../config/db');
const OrdersModel = require('../order');

class OrdersHistoryModel extends Model {}

OrdersHistoryModel.init({

    // id_history : {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },

    no_orders  : {
        type: DataTypes.UUID,
        primaryKey: true
        // references: {
        //     model: 'order',
        //     key: 'no_orders'
        // }
    },

    total_payment:
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
    modelName: 'order_histories'
});

OrdersHistoryModel.hasMany(OrdersModel, { foreignKey: 'no_orders' });
OrdersModel.belongsTo(OrdersHistoryModel, { foreignKey: 'no_orders' });

module.exports = OrdersHistoryModel;