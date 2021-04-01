const express = require("express")
const dishesRoute = express.Router()
const {getAllDishes,postAddNewDish,putUpdateDish,deleteSingleDish,getSingleDish} = require("../controllers/dishesController")
 const {auth} = require("../middleware/authentication")
const rules = require("../lib/rulesDishes")
const Validation = require("../middleware/validation") 

/* GET ALL DISHES FROM RESOURCES */
dishesRoute.get("/", getAllDishes )

/* POST REQUEST TO ADD NEW DISH */
dishesRoute.post("/",Validation(rules),postAddNewDish)

/* PUT REQUEST TO UPDATE SINGLE Dish IN DATABASE */
dishesRoute.put("/:id",putUpdateDish )

/* DELETE REQUEST TO DELETE SINGLE Dish IN DATABASE */
dishesRoute.delete("/:id",deleteSingleDish )

//GET SINGLE Dish FRO  DATABASE
dishesRoute.get("/:id",getSingleDish)


/* DEFAULT EXPORT */
module.exports = dishesRoute