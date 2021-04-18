const express = require("express");
/* SUB MODULE */
const router = express.Router();

/* IMPORTING CONTROLLERS */
const { index } = require("../controllers/indexController");
/* const dishesModel = require("../model/userModel")
const {compare} = require("../lib/encryption")
const JWT = require("jsonwebtoken") */

router.get("/", index);

/* Default export */
module.exports = router;
