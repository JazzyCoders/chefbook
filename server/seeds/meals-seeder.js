const Product = require('../models/product');
const { SuperUser } = require('../models/user');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI);

const Products = [
  new Product({
    imagePath: 'https://www.pizza-boss.de/_shops/res/pics/parallax_bg.jpg',
    title: 'DOUBLE CHEESE MARGHERITA',
    description: 'The ever-popular Margherita - loaded with extra cheese... oodies of it!',
    price: 269,
    category: 'Veg Pizza'
  }),
  new Product({
    imagePath: 'https://images-gmi-pmc.edge-generalmills.com/3c81dd0d-0334-46ce-8e4d-bd23a3ad1f81.jpg',
    title: 'Pasta Bolonese',
    description: 'Soft taste with meat and tomato salsa and spicy red pepper - quite a mouthful!',
    price: 209,
    category: 'BestSeller'
  }),
  new Product({
    imagePath: 'https://vikalinka.com/wp-content/uploads/2021/01/Beef-Goulash-2.jpg',
    title: "Beef Goulash",
    description: "Beef with vegetables with wine and tomato salsa",
    price: 99
  })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {

      //Add a admin account too!
      var admin = SuperUser();
      admin.name = 'admin';
      admin.employeeId = '1';
      admin.email = 'admin@chefbook.com';
      admin.password = admin.encryptPassword('admin');
      admin.save(function (err, result) {
        exit();
      });
    }
  });
}

function exit() {
  mongoose.disconnect();
}
