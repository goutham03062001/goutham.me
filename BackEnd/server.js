const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
dotenv.config({path:'config.env'});
require("./server/database/database");
const port = process.env.PORT;


//log request
app.use(morgan('tiny'));

//bodyparsing
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//append asssets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));


//routings

app.use("/",require("./server/routes/router"));


app.listen(port,()=>{
    console.log(`connected to port : ${port}`);
})

