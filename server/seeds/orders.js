const mongoose = require('mongoose');

const Dishes = require('../seeds/Orders');
customerId: String
chefId: String
dishes: [
  {
    dishId: String
        quantity: Number
  },
  {
    dishId: String
        quantity: Number
  }
],
  totalPrice: Number