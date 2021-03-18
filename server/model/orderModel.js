const mongoose = require("mongoose");
const { time } = require("faker");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  /*   quantity: {
      type: Number,
      required: true,
    }, */
  orders: [{ ref: "records", type: mongoose.Schema.Types.ObjectId }],
  user: { ref: "users", type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model("orders", OrderSchema);


/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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

module.exports = mongoose.model('Order', schema); */