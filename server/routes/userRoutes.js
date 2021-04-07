const express = require("express");

const userRouter = express.Router();


const {
  loginUser,
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
userRouter.get("/", getAllUsers);

/* POST REQUEST TO ADD NEW User */
// userRouter.post("/",Validation(Rules),postAddNewUser);

/* PUT REQUEST TO UPDATE SINGLE User IN DATABASE */
userRouter.put("/:id", putUpdateUser);

/* DELETE REQUEST TO DELETE SINGLE User IN DATABASE */
userRouter.delete("/:id", deleteSingleUser);

//GET SINGLE User FRO  DATABASE
userRouter.get("/:id", getSingleUser);

// SIGN UP NEW USER
userRouter.post('/signup', postAddNewUser);

// LogIn NEW USER
userRouter.post('/login', loginUser);

/* DEFAULT EXPORT */
module.exports = userRouter;
