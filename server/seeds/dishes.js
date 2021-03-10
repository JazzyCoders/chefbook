const mongoose = require('mongoose');

const Dishes = require('../models/Dishes');

const dishes = [
  {
    info: {
      name: 'Beef Rolls',
      ingrediants: 'beef','onion','tomato sauce',
      price: 10,
      photo: '/img/beef_rolls.jpg'
    },