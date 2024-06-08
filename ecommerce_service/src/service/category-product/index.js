
const CategoryProductModel = require("../../model/category-product");
const ProductService       = require("../../model/product");

class CategoryProductService
{
    static async getAll()
    {
        return await CategoryProductModel.findAll(
            {
                where:{
                    status : "1"
                },
                include: [
                    {
                      model: ProductService,
                      required: false,
                      where: {
                        status: '1' 
                      }
                    }
                ],
            }
        );
    }

    static async create(data)
    {
        return await CategoryProductModel.create(data);
    }

    static async read(id_category)
    {
        return await CategoryProductModel.findOne(
            {
                where:{
                    id_category: id_category,
                    status : "1"
                },              
                include: [
                    {
                      model: ProductService,
                      required: false,
                      where: {
                        status: '1' 
                      }
                    }
                ],
            }
        );
    }

    static async update(id_category, data)
    {
        const [updated] = await CategoryProductModel.update(data, {
            where: { id_category: id_category }
        });

        return updated;
    }

    static async delete(id_category, data)
    {
        const [updated] = await CategoryProductModel.update(data, {
            where: { id_category: id_category }
        });

        return updated;
    }

    static async findCategoryName(nama_category)
    {
        return await CategoryProductModel.findOne(
            {
                where:{
                    nama_category: nama_category,
                    status : "1"
                }
            }
        );
    }
    
}


module.exports = CategoryProductService;