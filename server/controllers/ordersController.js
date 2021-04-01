const OrderData = require("../model/orderModel")

exports.getAllOrders = async (req, res, next) => {
  
  try {
    let allOrders = await OrderData.find().populate("records", "-_id -__v").populate("user", "-password -_id -__v").select("-__v");
    res.status(200).send({ success: true,order: allOrders });
  } catch (err) {
    next(err);
  }
}

exports.postAddNewOrder = async (req, res, next) => {
  console.log(req.body)
  
  try {
    const order = new OrderData(req.body);
    await order.save(); 
    res.status(200).send({ success: true, order:order });
  } catch (err) {
    console.log(err.message);
    
    next(err);
  }
}

exports.putUpdateOrder = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const updatedOrder = await OrderData.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).send({ success: true, order: updatedOrder })
  } catch (err) {
    next(err);
  }

}

exports.deleteSingleOrder = async (req, res, next) => {
  const { id } = req.params
  
  try {
    const orderDeleted = await OrderData.findByIdAndRemove(id)
    if (orderDeleted) {
      res.status(200).send({ success: true, order:orderDeleted })
    } else {
      res.status(404).send("Already Deleted that record")
    }
  }
  catch (err) {
    next(err)
  }

}

exports.getSingleOrder = async (req, res, next) => {
  const { id } = req.params
  //get/read single order from mongodb
  try {
    const order = await OrderData.findById(id).select("-_id -__v")
    if (order) {
      res.status(200).send({ success: true, order:order })
    }
    else {
      res.status(404).send("No such record found with that Id")
    }
  } catch (err) { next(err) }
}

