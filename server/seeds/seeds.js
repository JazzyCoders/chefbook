// importing mongoose
const mongoose = require("mongoose");
/* const UserData = require("../model/usersModel"); // models
const RecordData = require("../model/recordModel"); */
const OrderData = require("../model/orderModel");
const faker = require("faker");

async function seed() {
  // connect the application with mongoDB
  mongoose.connect(
    "mongodb+srv://chefbook:chefbook@cluster0.vlht1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  // open/connect
  // listening for event - open means connect
  mongoose.connection.on("open", () => {
    console.log("connection established");
  });

  // error/ connection error
  // listening for event
  mongoose.connection.on("error", () => {
    console.log("Error found while connection");
  }); 

  // delete all users from users collection
  /* Promise.then().then().catch() */
  /*  try{}catch(err){} */
  /* try {
    await RecordData.deleteMany({});
    console.log("all previous records deleted from database");
  } catch (err) {
    console.log(err);
  }
 */
  /* try {
    await OrderData.deleteMany({});
    console.log("all previous orders deleted from database");
  } catch (err) {
    console.log(err);
  } */

  const orders = Array(10)
    .fill(null)
    .map(() => {
      const order = new OrderData({
        quantity: faker.random.number(),
        record: faker.commerce.productName(),
      });
      return order.save();
    });

  try {
    await Promise.all(orders);
    console.log("all orders stored inside the database");
  } catch (err) {
    console.log(err.message);
  }
  // perform  different operations with MongoDB
  /* const records = Array(10)
    .fill(null)
    .map(() => {
      const record = new RecordData({
        title: faker.commerce.productName(),
        artist: faker.name.firstName(),
        year: faker.date.past().getUTCFullYear(),
        img: faker.image.imageUrl(),
        price: faker.commerce.price(),
        currency: "EUR",
      });
      return record.save();
    }); */

  // asynchronous code
  // store this user in Database
  /* user.save(); //Promise */

  //resolve all Promises inside an array
  //it is only to close mongoose connection
  //Promise.all only accepts Array of Promises

  /* try {
    await Promise.all(records);
    console.log("all records stored inside the database");
  } catch (err) {
    console.log(err.message);
  } */
  // after finish all tasks
  // close mongoDB connection
  //store the user in database and close the connection
  mongoose.connection.close();
}

// synchronous code
seed()
  .then(function () {
    console.log("The last shall be the first!");
  })
  .catch(function (err) {
    console.log("error: ", err);
  }); 