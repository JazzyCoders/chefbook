const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  postAddNewUser,
  putUpdateUser,
  deleteSingleUser,
  getSingleUser,
} = require("../controllers/usersController");
const { auth } = require("../middlewares/anthentication")

const Rules = require("../lib/validationRules")

const Validation = require("../middlewares/validation")

/* GET ALL UserS FROM RESOURCES */
router.get("/", auth, getAllUsers);

/* POST REQUEST TO ADD NEW User */
router.post(
  "/",
  Validation(Rules),
  postAddNewUser
);

/* PUT REQUEST TO UPDATE SIGNLE User IN DATABASE */
router.put("/:id", auth, putUpdateUser);

/* DELETE REQUEST TO DELETE SIGNLE User IN DATABASE */
router.delete("/:id", auth, deleteSingleUser);

//GET SIGNLE User FRO  DATABASE
router.get("/:id", auth, getSingleUser);


/* DEFAULT EXPORT */
module.exports = router;
