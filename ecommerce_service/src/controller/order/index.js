const OrderService          = require("../../service/order");
const OrdersHistoryService  = require("../../service/order-history");
const uuid                  = require("uuid");

class OrderController 
{
    static async getAll(req, res)
    {
        try {
            const category = await OrderService.getAll();
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async create(req, res)
    {
        try {
            const history   = [];
            const data      = req.body;
            const no_orders = uuid.v4();

            const newData   = data.map(data => ({ ...data, no_orders  }));
            
            let total_payment = 0;

            // Iterate over the array and sum up total harga
            data.forEach(data => {
                total_payment += parseInt(data.total_harga);
            });

            history.push({no_orders: no_orders, total_payment: total_payment});

            const h_order   = await OrdersHistoryService.create(history[0]);
            const order     = await OrderService.create(newData);

            res.status(201).json(order);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async read(req, res)
    {
        try {
            const id_category   = req.params.id_category;
            const category      = await OrderService.read(id_category);
       
            
            if(!category){
                return res.status(400).send('Category Product Tidak Di Temukan');
            }
            // console.log(user.username);
            // res.json(user);
            res.status(201).json(category);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res)
    {
        try {
            const id_category       = req.params.id_category;
            const {nama_category}   = req.body;

            //  CHECK ID CATEGORY PRODUCT
            const category      = await OrderService.read(id_category);
            if(!category){
                return res.status(400).send('Category Product Tidak Di Temukan');
            }

            //  CHECK NAMA CATEGORY
            const findCategoryName = await OrderService.findCategoryName(nama_category);

            if(findCategoryName)
            {
                return res.status(400).send('Category Product Sudah Ada');
            }

            // CHECK UPDATE
     
            const update = await OrderService.update(id_category, req.body);
           
            if(update){
                const category = await OrderService.read(id_category);

                res.status(201).json(category);
            }else{
                res.status(400).send("Data Gagal Di Update");
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res)
    {
        try {
            const id_category     = req.params.id_category;
            const category     = await OrderService.read(id_category);
            
            if(!category){
                return res.status(400).send('Category Product Tidak Ditemukan');
            }

            const data = {"status":"0"};

            const hapus = await OrderService.delete(id_user, data);
     
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

module.exports = OrderController;