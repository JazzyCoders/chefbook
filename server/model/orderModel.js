const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* const OrderSchema = new Schema({

  dishes: [{ quantity: { type: Number }, dishId: { ref: "dishes", type: mongoose.Schema.Types.ObjectId } }],
  user: { ref: "users", type: mongoose.Schema.Types.ObjectId }

});

module.exports = mongoose.model("orders", OrderSchema);
 
 */

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: { type: Object, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  preparing: { type: Boolean, required: true },
  ontheway: { type: Boolean, required: true },
  delivered: { type: Boolean, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  paymentId: { type: String, required: true }
});

module.exports = mongoose.model('Order', schema);
