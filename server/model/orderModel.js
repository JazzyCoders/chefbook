const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
/*   quantity: {
    type: Number,
    required: true,
  }, */
  dishes: [{quantity:{type:Number},dishId:{ ref: "dishes", type: mongoose.Schema.Types.ObjectId }}],
  user: { ref: "users", type: mongoose.Schema.Types.ObjectId }

});

module.exports = mongoose.model("orders", OrderSchema);
