const ProductService            = require("../../service/product");
const CategoryProductService    = require("../../service/category-product");
// const upload                    = require("../../utils/upload");
const path                      = require("path");
const fs                        = require("fs");

class ProductController
{
    static async getAll(req,res)
    {
        try {
            const product = await ProductService.getAll();
            res.status(201).json(product);

        } catch (error) {

            res.status(400).json({ error: error.message });
        }
    }

    static async create(req,res)
    {
        try {
            const product   = [];
            const is_kupon  = "0";

            const {id_category, id_user, nama_product, harga } = req.body;

            // //CHECK ID CATEGORY PRODUCT
            const category = await CategoryProductService.read(id_category);
            
            if(!category){
                return res.status(400).json({ message: 'Id Category Product Tidak Di Temukan!' });
            }

            // CHECK NAMA PRODUCT 
            const checkProduct = await ProductService.findProductName(nama_product);

            if(checkProduct){
                return res.status(400).json({ message: 'Nama Product Sudah Di Gunakan!' });
            }


            const file      = req.files.image;
            const fileSize  = file.data.length;
            const ext       = path.extname(file.name);
            const fileName  = file.md5 + ext;
            const url       = `${req.protocol}://${req.get("host")}/images/${fileName}`;
            
            const allowedType = ['.png','.jpg','.jpeg'];

            if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
            if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
        
            file.mv(`./src/public/images/${fileName}`, async(err)=>{
                if(err) return res.status(500).json({msg: err.message});
                try {
                    
                    if(harga > 50000)
                    {
                        product.push({id_category, id_user, nama_product, filename_image : fileName, path_image: url, harga, is_kupon : "1"});
                    }else{
                        product.push({id_category, id_user, nama_product, filename_image: fileName, path_image: url, harga, is_kupon: is_kupon});
                    }

                    const products = ProductService.create(product[0]);
                    res.status(201).json(product[0]);

                } catch (error) {
                    res.status(400).send("Create Data Gagal");
                }
            })
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async read(req,res)
    {
        try {
            const id_product   = req.params.id_product;
            const product   = await ProductService.read(id_product);
       
            
            if(!product){
                return res.status(400).send('Product Tidak Di Temukan');
            }

            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res)
    {
        try {
            const product = [];
            const id_product = req.params.id_product;
            
            const {nama_product, harga } = req.body;

            // CHECK NAMA PRODUCT 
            const checkProduct = await ProductService.findProductName(nama_product);

            if(checkProduct){
                return res.status(400).send("Nama Product Sudah Di Gunakan");
            }

            const file      = req.files.image;
            const fileSize  = file.data.length;
            const ext       = path.extname(file.name);
            const fileName  = file.md5 + ext;
            const url       = `${req.protocol}://${req.get("host")}/images/${fileName}`;
            
            const allowedType = ['.png','.jpg','.jpeg'];

            if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
            if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
        
            file.mv(`./src/images/${fileName}`, async(err)=>{
                if(err) return res.status(500).json({msg: err.message});
                try {
                    
                    if(harga > 50000)
                    {
                        product.push({nama_product, filename_image : fileName, path_image: url, harga, is_kupon : "1"});
                    }else{
                        product.push({nama_product, filename_image: fileName, path_image: url, harga, is_kupon: is_kupon});
                    }
                    console.log(product[0]);

                    const update = ProductService.update(id_product, product[0]);
                    if(update){

                        const data = await ProductService.read(id_product);
        
                        res.status(201).json(data);
                    }else{
                        res.status(400).send("Data Gagal Di Update");
                    }


                } catch (error) {
                    res.status(400).send("Data Gagal Di Update");
                }
            })
           
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res)
    {
        try {
            const id_product = req.params.id_product;

            //  CHECK PRODUCT
            const product = await ProductService.read(id_product);

            if(!product)
            {
                return res.status(400).send('Product Tidak Ditemukan');
            }  
            const data = {"status":"0"};

            const hapus = await ProductService.delete(id_product, data);
     
            if(hapus){
                res.status(201).send("Data Berhasil Di Hapus");
            }else{
                res.status(400).send("Data Gagal Di Update");
            }
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = ProductController;