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
userRouter.get("/",auth, getAllUsers);

/* POST REQUEST TO ADD NEW User */
userRouter.post("/",Validation(Rules),postAddNewUser);

/* PUT REQUEST TO UPDATE SIGNLE User IN DATABASE */
userRouter.put("/:id",auth, putUpdateUser);

/* DELETE REQUEST TO DELETE SIGNLE User IN DATABASE */
userRouter.delete("/:id",auth, deleteSingleUser);

//GET SIGNLE User FRO  DATABASE
userRouter.get("/:id",auth, getSingleUser);


/* DEFAULT EXPORT */
module.exports = userRouter;
