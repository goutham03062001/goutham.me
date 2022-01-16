var User = require("../model/UserSchema");

exports.createUser = async(req,res)=>{
   try {
    if(!req.body)
    {
        res.status(400).send("content can not be empty!");
        return;
    }
    
    //verify whether he is an existed user or not
    const{username,useremail,usermobile,usergender,userstatus} = req.body;

    const newUser = await new User({
        username,useremail,usermobile,usergender,userstatus

    });
    await newUser.save(newUser).then((data)=>{
        // res.send(data);
        res.redirect("/add_user")
       // alert("user created successfully");
        console.log(data);
    }).catch((err)=>{
        res.status(500).send(err)
    });
   } catch (error) {
       res.send(error)
   }

   
    
}

exports.updateUser = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send("Please Fill the all the fields");
    }
    const id = req.params.id;

    User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(!req.body)
        {
            res.status(404).send("Oops! We can't find the user with provided Id");
        }
        else{
            //send the updated data
            res.send(data);
        }
    }).catch(err=>{
        res.send("Something went happend while updating the user");
    })


}

exports.deleteUser = (req,res)=>{

    //get the user id
    const id = req.params.id;
    User.findByIdAndDelete(id).then((response)=>{
        if(!id){
            res.status(404).send("Oops! No such user is available");
        }
        res.status(200).send("User deleted Successfully")
    }).catch((err)=>{
        res.status(500).send("Something happend while deleting the user");
    })

}

exports.getUsers = (req,res)=>{
    //find all the users

    if(req.query.id)
    {
        const id = req.query.id;
        User.findById(id).then((found)=>{
            if(!id)
            {
                res.status(404).send("No such user is found in the database");

            }

            else{
                res.status(200).send(found);
            }
        }).catch((err)=>{
            //res.status(500).send("Something happend while fetching for the id : "+id);
            console.log(err);
        })
    }

    User.find().then((data)=>{res.send(data)
    console.log(data.length)}).catch((err)=>{
        console.log(err);
    })
}

//search for the particular user by name

exports.getParticularUser = (req,res)=>{
    const username = req.params.username;
    User.findOne({username}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(500).send("Something happend while fetching the user details");
    })

}