const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    username:String,
    useremail:String,
    usermobile:String,
    usergender:String,
    userstatus:String,

});

const User = new mongoose.model("user",Schema);
module.exports = User;