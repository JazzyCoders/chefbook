const express = require("express")
const dishesRoute = express.Router()
const {getAllDishes,postAddNewDish,putUpdateDish,deleteSingleDish,getSingleDish} = require("../controllers/dishesController")
/* const {auth} = require("../middlewares/authentication")
const rules = require("../lib/validationRules")
const Validation = require("../middlewares/validation") */

/* GET ALL DISHES FROM RESOURCES */
dishesRoute.get("/",getAllDishes )

/* POST REQUEST TO ADD NEW DISH */
dishesRoute.post("/", postAddNewDish)

/* PUT REQUEST TO UPDATE SINGLE Dish IN DATABASE */
dishesRoute.put("/:id",putUpdateDish )

/* DELETE REQUEST TO DELETE SINGLE Dish IN DATABASE */
dishesRoute.delete("/:id",deleteSingleDish )

//GET SINGLE Dish FRO  DATABASE
dishesRoute.get("/:id",getSingleDish)


/* DEFAULT EXPORT */
module.exports = dishesRoute