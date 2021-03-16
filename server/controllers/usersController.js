const UserData = require("../model/userModel");
exports.getAllUsers = async (req, res, next) => {
  //getting all users from mongoDB
  try {
    let allUsers = await UserData.find();
    res.status(200).send({ success: true, allUsers });
  } catch (err) {
    next(err);
  }
};

exports.postAddNewUser = async (req, res, next) => {
  /*    console.log(req.body) */
  //adding new User into mongoDB
  try {
    const user = new UserData(req.body);
    await user.save(); //store data into database

    let token = await user.generateAuthToken();
    let PublicUser = await user.getPublicFields();

    res
      .status(200)
      .header("x-auth", token)
      .json({ success: true, user: PublicUser });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
};

exports.putUpdateUser = async (req, res, next) => {
  const { id } = req.params;
  //finding existing user with that id in database and update
  try {
    const updatedUser = await UserData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({ success: true, updatedUser });
  } catch (err) {
    next(err);
  }
};

exports.deleteSingleUser = async (req, res, next) => {
  const { id } = req.params;
  //finding that User //deleting User
  try {
    const UserDeleted = await UserData.findByIdAndRemove(id);
    if (UserDeleted) {
      res.status(200).send({ success: true, UserDeleted });
    } else {
      res.status(404).send("Already Deleted that order");
    }
  } catch (err) {
    next(err);
  }
};

exports.getSingleUser = async (req, res, next) => {
  const { id } = req.params;
  //get single user from mongoDB
  try {
    const user = await UserData.findById(id).select("-_id -__v");
    if (user) {
      res.status(200).send({ success: true, user });
    } else {
      res.status(404).send("No such order found with that Id");
    }
  } catch (err) {
    next(err);
  }
};


