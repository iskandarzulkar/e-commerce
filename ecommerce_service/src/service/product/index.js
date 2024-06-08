const ProductModel = require("../../model/product");

class ProductService 
{
    static async getAll()
    {
        return await ProductModel.findAll(
            {
                where:{
                    status : "1"
                }
            }
        );
    }

    static async create(data)
    {
        return await ProductModel.create(data);
    }

    static async read(id_product)
    {
        return await ProductModel.findOne(
            {
                where:{
                    id_product: id_product,
                    status : "1"
                }
            }
        );
    }

    static async update(id_product, data)
    {
        const [updated] = await ProductModel.update(data, {
            where: { id_product: id_product }
        });
        console.log(updated);
        return updated;
    }

    static async delete(id_product, data)
    {
        const [updated] = await ProductModel.update(data, {
            where: { id_product: id_product }
        });

        return updated;
    }

    static async findProductName(nama_product)
    {
        return await ProductModel.findOne(
            {
                where:{
                    nama_product: nama_product,
                    status : "1"
                }
            }
        );
    }
}

module.exports = ProductService;