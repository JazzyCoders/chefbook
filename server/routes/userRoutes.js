const express = require("express")

const UserRoute = express.Router()
const {getAllUsers,postAddNewUser,putUpdateUser,deleteSingleUser,getSingleUser} = require("../controllers/userControllers")


/* GET ALL Users FROM RESOURCES */
UserRoute.get("/",getAllUsers )

/* POST REQUEST TO ADD NEW User */
UserRoute.post("/",postAddNewUser)

/* PUT REQUEST TO UPDATE SIGNLE User IN DATABASE */
UserRoute.put("/:id",putUpdateUser )

/* DELETE REQUEST TO DELETE SIGNLE User IN DATABASE */
UserRoute.delete("/:id",deleteSingleUser )

//GET SIGNLE User FRO  DATABASE
UserRoute.get("/:id",getSingleUser)

// DEFAULT EXPORT
module.exports = recordRout
