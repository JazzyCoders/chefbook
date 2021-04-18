const express =require("express")

/* SUB MODULE */
const router = express.Router()

// IMPORTING CONTROLLER

const {index} = require("../controllers/indexController")
const UserModel = require("../model/userModel")
const {compare} = require("../lib/encryption")
const JWT = require("jsonwebtoken")
router.get("/",index)

//LOGIN 

router.post("/login", async(req,res,next)=>{
    const {email,password} = req.body

    try {
        const user =  await UserModel.findOne({email})
        if (!user) {
            throw new Error("email does not exist")
        }
         console.log(user.password,password);
        /* let check = compare(password,user.password) */
        let check = await user.checkPassword(password)
        if (!check) {
            throw new Error("password does not match")
        }
        //let token = JWT.sign({_id:user._id,email:user.email},"secretCode",{expiresIn:"1h"})
        let token = await user.generateAuthToken()
        let publicUser = user.getPublicFields()
        res.header("x-auth",token)
        //res.cookie("token",token)
        res.send({success:true,user:publicUser})

    } catch (err) {
        next(err)
    }

})

 
module.exports = router