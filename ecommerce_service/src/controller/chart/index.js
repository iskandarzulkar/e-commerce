// const CategoryProductService = require("../../service/category-product");

class ChartController 
{
    static async getAll(req, res)
    {
        // try {
        //     const category = await CategoryProductService.getAll();
        //     res.status(201).json(category);
        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
    }

    static async create(req, res)
    {
        // try {
        //     const categorys = [];

        //     const {id_user, nama_category } = req.body;

        //     const findCategoryName = await CategoryProductService.findCategoryName(nama_category);

        //     if(findCategoryName)
        //     {
        //         return res.status(400).send('Category Product Sudah Ada');
        //     }

        //     categorys.push({id_user, nama_category});

        //     const category = await CategoryProductService.create(categorys[0]);
        //     res.status(201).json(category);

        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
    }

    static async read(req, res)
    {
        // try {
        //     const id_category   = req.params.id_category;
        //     const category      = await CategoryProductService.read(id_category);
       
            
        //     if(!category){
        //         return res.status(400).send('Category Product Tidak Di Temukan');
        //     }
        //     // console.log(user.username);
        //     // res.json(user);
        //     res.status(201).json(category);

        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
    }

    static async update(req, res)
    {
        // try {
        //     const id_category       = req.params.id_category;
        //     const {nama_category}   = req.body;

        //     //  CHECK ID CATEGORY PRODUCT
        //     const category      = await CategoryProductService.read(id_category);
        //     if(!category){
        //         return res.status(400).send('Category Product Tidak Di Temukan');
        //     }

        //     //  CHECK NAMA CATEGORY
        //     const findCategoryName = await CategoryProductService.findCategoryName(nama_category);

        //     if(findCategoryName)
        //     {
        //         return res.status(400).send('Category Product Sudah Ada');
        //     }

        //     // CHECK UPDATE
     
        //     const update = await CategoryProductService.update(id_category, req.body);
           
        //     if(update){
        //         const category = await CategoryProductService.read(id_category);

        //         res.status(201).json(category);
        //     }else{
        //         res.status(400).send("Data Gagal Di Update");
        //     }
        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
    }

    static async delete(req, res)
    {
        // try {
        //     const id_category     = req.params.id_category;
        //     const category     = await CategoryProductService.read(id_category);
            
        //     if(!category){
        //         return res.status(400).send('Category Product Tidak Ditemukan');
        //     }

        //     const data = {"status":"0"};

        //     const hapus = await CategoryProductService.delete(id_user, data);
     
        //     if(hapus){
        //         res.status(201).send("Data Berhasil Di Hapus");
        //     }else{
        //         res.status(400).send("Data Gagal Di Update");
        //     }
            
        // } catch (error) {
        //     res.status(400).json({ error: error.message });
        // }
    }
}

module.exports = ChartController;