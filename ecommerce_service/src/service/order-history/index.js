const OrderHistoryModel = require("../../model/order-history");
const OrdersModel       = require("../../model/order");

class OrdersHistoryService 
{
    static async getAll()
    {
        return await OrderHistoryModel.findAll(
            {
                where:{
                    status : "1"
                },
                include:[
                    {
                        model: OrdersModel,
                        required: false,
                        where: {
                            status: '1' 
                        }
                    }
                ]
            }
        );
    }

    static async getByIdUser(id_user)
    {
        return await OrderHistoryModel.findAll(
            {
                where:{
                    status : "1"
                },
                include:[
                    {
                        model: OrdersModel,
                        required: false,
                        where: {
                            id_user: id_user,
                            status: '1' 
                        }
                    }
                ]
            }
        );
    }


    static async create(data)
    {
        return await OrderHistoryModel.create(data);
    }

    // static async read(id_orders)
    // {
    //     return await OrderHistoryModel.findOne(
    //         {
    //             where:{
    //                 id_orders: id_orders,
    //                 status : "1"
    //             }
    //         }
    //     );
    // }

    // static async update(id_orders, data)
    // {
    //     const [updated] = await OrderHistoryModel.update(data, {
    //         where: { id_orders: id_orders }
    //     });
    //     console.log(updated);
    //     return updated;
    // }

    // static async delete(id_orders, data)
    // {
    //     const [updated] = await OrderHistoryModel.update(data, {
    //         where: { id_orders: id_orders }
    //     });

    //     return updated;
    // }

    // static async findProductName(nama_product)
    // {
    //     return await OrderHistoryModel.findOne(
    //         {
    //             where:{
    //                 nama_product: nama_product,
    //                 status : "1"
    //             }
    //         }
    //     );
    // }
}

module.exports = OrdersHistoryService;