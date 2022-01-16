const axios = require("axios");

exports.homePage = (req,res)=>{

    axios.get('http://localhost:4200/api/users')
    .then(function(response){
        console.log(response);
        res.render("index",{user:response.data})
    }).catch((err)=>{
        res.send("somthing happend while fetching the data");
    })
}

exports.addUser = (req,res)=>{
    res.render("add_user");
};

exports.updateUser = (req,res)=>{
    axios.get('http://localhost:4200/api/users',{params:{id:req.query.id}}).then((response)=>{
        res.render("update_user",{userdata:response.data})
    }).catch((err)=>{
        console.log(err);
    })
   // res.render("update_user");
}