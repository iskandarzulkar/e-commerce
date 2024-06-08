const express       = require("express");
const app           = express();
const bodyParser    = require('body-parser');
const FileUpload    = require("express-fileupload");
const cors          = require('cors');

require('dotenv').config();

PORT        = process.env.PORT;
IP_SERVER   = process.env.IP_SERVER;


const db                    = require("./config/db");
const userRoute             = require("./routes/user");
const cProductRoute         = require("./routes/category-product");
const productRoute          = require("./routes/product");
// const chartRoute    = require("./routes/chart");
const orderRoute            = require("./routes/order");
const orderHistoryRoute     = require("./routes/order-history");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static("src/public"));
app.use(FileUpload());

const StartServer = async () => {

    try {
        await db.authenticate();

        app.use('/api/user', userRoute);
        app.use('/api/category-product', cProductRoute);
        app.use('/api/product', productRoute);
        app.use("/api/order", orderRoute);
        app.use("/api/order-history", orderHistoryRoute);
        
        app.listen(PORT, () =>{
            console.log(`your server is running at http://${IP_SERVER}:${PORT}`)
        }) 

    } catch (error) {
        console.error("Unable to start server: ", error)
    }
};

StartServer();
