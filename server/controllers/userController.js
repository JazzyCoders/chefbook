const UserData = require("../model/userModel")


exports.loginUser = async (req, res) => {
    /* UserData.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            res.status(401).send({ message: "No account is found. Please sign up first." })
        }
        else ()
    }) */
    try {
        if (UserData.findByToken(req.token)) { return res.status(200).send({ message: 'User is already authenticated.' }) }

        let user = await UserData.findOne({
            email: req.body.email

        })

        if (user === null) {
            res.status(500).send({ success: false, })
        }

        // check if password matches, use the "checkPassword" method

        // user.checkPassword({ req.body.password })  
        // if password doesn't match 
        /* if (!user.checkPassword(req.body.password)) { res.status(403).send({ message: " Your Password does not match. Please enter a valid password." }) } */
        // if password matches, generate token with "generateAuthToken"
        console.log(user);
        res.status(200).send({ success: true, user: user, token: user.generateAuthToken() })
    } catch (err) {
        next(err)
    }
}
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
        const user = await UserData.create({
            ...req.body,
            phone: Number(req.body.phone)
        });

        /*         let token = await user.generateAuthToken()
         */

        res.status(200).send({ success: true, users: user })

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