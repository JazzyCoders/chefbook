const UserData = require("../model/userModel")


/* exports.loginUser = async (req, res) => {

    try {
      if (UserData.findByToken(req.token)) {
        return res.status(200).send({ message: "User is already authenticated." });
      }

      let user = await UserData.findOne({
        email: req.body.email,
      });

      if (user === null) {
        res.status(500).send({ error: 1, success: false });
      }

      // console.log(req.body.password);
      // console.log(user.checkPassword(req.body.password));

      // check if password matches, use the "checkPassword" method
      if (!user.checkPassword(req.body.password)) {
        res.status(403).send({ error: 2, success: false });
      }

      // if password matches, generate token with "generateAuthToken"
      res.status(200).send({ success: true, user: user, token: user.generateAuthToken() });
    } catch (err) {
        next(err)
    }

} */

exports.getAllUsers = async (req, res, next) => {
    console.log("from the controller");
    try {
        let allUsers = await UserData.find()
        res.status(200).send({ success: true, users: allUsers })
    } catch (err) {
        next(err)
    }
}

// signup controller
exports.postAddNewUser = async (req, res, next) => {
    console.log(req.body)

     try {
        const user = new UserData(req.body)
        await user.save() // stored in the DB
        let token = await user.generateAuthToken()
        let publicUser = await user.getPublicFields()
        res.status(200).header("x-auth",token).send({success:true,user:publicUser})
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}

exports.putUpdateUser = async (req, res, next) => {
    const { id } = req.params

    try {
        const updateUser = await UserData.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send({ success: true, users: updateUser })
    } catch (err) {
        console.log(err.message);
        next(err)
    }

}

exports.deleteSingleUser = async (req, res, next) => {
    const { id } = req.params

    try {
        const userDelete = await UserData.findByIdAndDelete(id)
        if (userDelete) {
            res.status(200).send({ success: true, users: userDelete })
        } else {
            res.status(404).send("this user already deleted")
        }

    } catch (err) {
        next(err)
    }

}


exports.getSingleUser = async (req, res, next) => {
    const { id } = req.params

    try {
        const oneUserD = await UserData.findById(id).select("-_id -__v")
        if (oneUserD) {
            res.status(200).send({ success: true, users: oneUserD })
        } else {
            res.status(404).send("this user ID is not found")
        }

    } catch (err) {
        next(err)
    }

}