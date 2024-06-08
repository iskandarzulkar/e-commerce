const OrderHistoryService   = require("../../service/order-history");
const OrdersHistoryService  = require("../../service/order-history");
const uuid                  = require("uuid");

class OrderHistoryController 
{
    static async getAll(req, res)
    {
        try {
            const orderHistory = await OrderHistoryService.getAll();
            res.status(201).json(orderHistory);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    static async getByIdUser(req,res)
    {
        try {
            const id_user  = req.params.id_user;
            const orderHistory = await OrderHistoryService.getByIdUser(id_user);
            res.status(201).json(orderHistory);
        } catch (error) {
            
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
            const order     = await OrderHistoryService.create(newData);

            res.status(201).json(order);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async read(req, res)
    {
        try {
            const id_orderHistory   = req.params.id_orderHistory;
            const orderHistory      = await OrderHistoryService.read(id_orderHistory);
       
            
            if(!orderHistory){
                return res.status(400).send('Category Product Tidak Di Temukan');
            }
            // console.log(user.username);
            // res.json(user);
            res.status(201).json(orderHistory);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async update(req, res)
    {
        try {
            const id_orderHistory       = req.params.id_orderHistory;
            const {nama_orderHistory}   = req.body;

            //  CHECK ID CATEGORY PRODUCT
            const orderHistory      = await OrderHistoryService.read(id_orderHistory);
            if(!orderHistory){
                return res.status(400).send('Category Product Tidak Di Temukan');
            }

            //  CHECK NAMA CATEGORY
            const findCategoryName = await OrderHistoryService.findCategoryName(nama_orderHistory);

            if(findCategoryName)
            {
                return res.status(400).send('Category Product Sudah Ada');
            }

            // CHECK UPDATE
     
            const update = await OrderHistoryService.update(id_orderHistory, req.body);
           
            if(update){
                const orderHistory = await OrderHistoryService.read(id_orderHistory);

                res.status(201).json(orderHistory);
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
            const id_orderHistory     = req.params.id_orderHistory;
            const orderHistory     = await OrderHistoryService.read(id_orderHistory);
            
            if(!orderHistory){
                return res.status(400).send('Category Product Tidak Ditemukan');
            }

            const data = {"status":"0"};

            const hapus = await OrderHistoryService.delete(id_user, data);
     
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

module.exports = OrderHistoryController;