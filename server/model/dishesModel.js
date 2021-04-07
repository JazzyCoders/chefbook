const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  category:{
    type: String,
    required:true,
  },
  Date: {
      type: Date,
      default: Date.now
    },
  chefId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: [],
    required: true
  },
  portions: {
      type: Number,
      required: true
  },
  orderCount: {
    type: Number
   }
})


module.exports= mongoose.model("dishes",DishSchema)
