const UserData = require("../model/userModel")



exports.getAllUsers= async(req,res,next)=>{   
    try {
        let allUsers =  await UserData.find()
        res.status(200).send({ success:true,allUsers})
    } catch (err) {
        next(err)
    }

}


exports.postAddNewUser= async(req,res,next)=>{
    //console.log(req.body)

       try {
        const user = new UserData(req.body)
        await user.save() 
        let token = await user.generateAuthToken()
        let publicUser = await user.getPublicFields()
        res.status(200).header("x-auth",token).send({success:true,user:publicUser})
    } catch (error) {
        console.log(error.message);
        next(error)
    } 
}

exports.putUpdateUser= async(req,res,next)=>{
    const {id} = req.params

    try {
        const updateUser = await UserData.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send({success:true,updateUser})
    } catch (err) {
        console.log(err.message);
        next(err)
    }

}


exports.deleteSingleUser= async(req,res,next)=>{
    const {id} = req.params
   
    try {
        const userDelete = await UserData.findByIdAndDelete(id)
        if (userDelete) {
            res.status(200).send({success:true,userDelete})
        } else {
            res.status(404).send("this user already deleted")
        }

    } catch (err) {
        next(err)
    }
   
  
}

exports.getSingleUser= async(req,res,next)=>{
    const {id} = req.params

   try {
       const oneUserD = await UserData.findById(id).select("-_id -__v")
        if (oneUserD) {
            res.status(200).send({success:true,oneUserD})
        } else{
            res.status(404).send("this user ID is not found")
        }

   } catch (err) {
       next(err)
   }
   
   
}