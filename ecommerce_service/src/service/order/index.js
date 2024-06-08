const OrderModel = require("../../model/order");

class OrderService 
{
    static async getAll()
    {
        return await OrderModel.findAll(
            {
                where:{
                    status : "1"
                }
            }
        );
    }

    static async create(data)
    {
        return await OrderModel.bulkCreate(data);
    }

    static async read(id_orders)
    {
        return await OrderModel.findOne(
            {
                where:{
                    id_orders: id_orders,
                    status : "1"
                }
            }
        );
    }

    static async update(id_orders, data)
    {
        const [updated] = await OrderModel.update(data, {
            where: { id_orders: id_orders }
        });
        console.log(updated);
        return updated;
    }

    static async delete(id_orders, data)
    {
        const [updated] = await OrderModel.update(data, {
            where: { id_orders: id_orders }
        });

        return updated;
    }

    static async findProductName(nama_product)
    {
        return await OrderModel.findOne(
            {
                where:{
                    nama_product: nama_product,
                    status : "1"
                }
            }
        );
    }
}

module.exports = OrderService;