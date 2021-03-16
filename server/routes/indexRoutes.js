const express = require("express")
/* SUB MODULE */
const router = express.Router()

/* IMPORTING CONTROLLERS */
const { index } = require("../controllers/indexController")
const UserModel = require("../model/userModel")
const { compare } = require("../lib/encryption")
const JWT = require("jsonwebtoken")
router.get("/", index)


//login 
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body
  /* email: test@getMaxListeners.com 
     password : abcdef */
  try {
    /* await UserModel.generateAuthToken() */
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error("email doesn't exist")
    }

    console.log(user.password, password)
    /*  let check = compare(password, user.password) */
    let check = await user.checkPassword(password)
    /*  let check = user.checkPassword(password) */
    if (!check) {
      throw new Error("password doesn't match")
    }
    /*  let token = JWT.sign({_id:user._id,email:user.email}, "secretcode") */
    let token = await user.generateAuthToken()
    let publicUser = await user.getPublicFields()

    res.header("x-auth", token)
    /*  res.cookie("token",token) */
    res.send({ success: true, user: publicUser })

  }
  catch (err) {
    next(err)
  }
})

/* Default export */
module.exports = router
