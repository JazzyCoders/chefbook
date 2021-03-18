const mongoose = require("mongoose")
const Schema = mongoose.Schema;

module.exports = function Cart(Cart) {
  this.items = Cart.items || {};
  this.totalQty = Cart.totalQty || 0;
  this.totalPrice = Cart.totalPrice || 0;
  this.instructions = Cart.instructions || '';

  this.add = function (item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };

  this.addInstructions = function (inst) {
    this.instructions = inst;
  }

  this.reduceByOne = function (id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.removeItem = function (id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };

  this.generateArray = function () {
    let arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
