const RecordData = require("../model/orderModel");

exports.getAllDishes = async (req, res, next) => {
  console.log(req.user)
  //getting/reading all records from mongoDB
  try {

    let allDishes = await DishesData.find();
    res.status(200).send({ success: true, allDishes });

  } catch (err) {
    next(err);
  }
};

exports.postAddNewDishes = async (req, res, next) => {
  console.log(req.body);
  //adding new Record into mongoDB
  try {
    const dish = new RecordData(req.body);
    await dish.save(); //store data into database
    res.status(200).send({ success: true, dish });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
};

exports.putUpdateDishes = async (req, res, next) => {
  const { id } = req.params;
  //finding existing record with that id in database and update
  try {
    const updatedDishes = await DishesData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({ success: true, updatedDishes });
  } catch (err) {
    next(err);
  }
};

exports.deleteSingDishes = async (req, res, next) => {
  const { id } = req.params;
  //finding existing record with that id in database and delete
  try {
    const orderDeleted = await DishesData.findByIdAndRemove(id);
    if (dishDeleted) {
      res.status(200).send({ success: true, recordDeleted });
    } else {
      res.status(404).send("Already Deleted that dish");
    }
  } catch (err) {
    next(err);
  }
};

exports.getSingleDish = async (req, res, next) => {
  const { id } = req.params;
  //get single record from mongodb
  try {
    const dish = await DishData.findById(id).select("-_id -__v");
    if (dish) {
      res.status(200).send({ success: true, dish });
    } else {
      res.status(404).send({ success: false, message: "No such dish found with that Id" });
    }
  } catch (err) {
    next(err);
  }
};

