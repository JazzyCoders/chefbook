const express = require("express");

const userRouter = express.Router();

const {
  getAllUsers,
  postAddNewUser,
  putUpdateUser,
  deleteSingleUser,
  getSingleUser,
} = require("../controllers/userController");

const { auth } = require("../middleware/authentication")

const Rules = require("../lib/rules")

const Validation = require("../middleware/validation")


/* GET ALL UserS FROM RESOURCES */
userRouter.get("/allUsers", getAllUsers);

/* POST REQUEST TO ADD NEW User */
// userRouter.post("/",Validation(Rules),postAddNewUser);

/* PUT REQUEST TO UPDATE SIGNLE User IN DATABASE */
userRouter.put("/:id", putUpdateUser);

/* DELETE REQUEST TO DELETE SIGNLE User IN DATABASE */
userRouter.delete("/:id", deleteSingleUser);

//GET SIGNLE User FRO  DATABASE
userRouter.get("/singleUser/:id", getSingleUser);


/* DEFAULT EXPORT */
module.exports = userRouter;
