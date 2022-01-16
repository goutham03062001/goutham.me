const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL,({
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
})).then((data)=>{console.log("connected to database successfully")}).catch((err)=>{
    console.log("Error occured while connecting to the database")
})