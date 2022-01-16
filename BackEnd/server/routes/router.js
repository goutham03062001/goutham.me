const express = require("express");
const route = express.Router();;

const services = require("../services/renders");
const controller = require("../controller/controller");
route.get("/",services.homePage);

route.get("/add_user",services.addUser);

route.get("/update_user",services.updateUser);

//API

route.get("/api/users",controller.getUsers);//to display all the users
route.put("/api/users/:id",controller.updateUser);//update the user by id
route.post("/api/users",controller.createUser);//create the user
route.delete("/api/users/:id",controller.deleteUser);//delete the user by id

route.get("/api/getParticularUser/?username",controller.getParticularUser);//to display all the users


module.exports = route;