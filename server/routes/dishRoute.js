const express = require("express")
const dishesRoute = express.Router()
const {getAllDishes,postAddNewDish,putUpdateDish,deleteSingleDish,getSingleDish} = require("../controllers/dishesController")
 const {auth} = require("../middleware/authentication")
const rules = require("../lib/rulesDishes")
const Validation = require("../middleware/validation") 

/* GET ALL DISHES FROM RESOURCES */
dishesRoute.get("/",auth, getAllDishes )

/* POST REQUEST TO ADD NEW DISH */
dishesRoute.post("/",auth,Validation(rules),postAddNewDish)

/* PUT REQUEST TO UPDATE SINGLE Dish IN DATABASE */
dishesRoute.put("/:id",auth,putUpdateDish )

/* DELETE REQUEST TO DELETE SINGLE Dish IN DATABASE */
dishesRoute.delete("/:id",auth,deleteSingleDish )

//GET SINGLE Dish FRO  DATABASE
dishesRoute.get("/:id",auth,getSingleDish)


/* DEFAULT EXPORT */
module.exports = dishesRoute