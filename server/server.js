const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const indexRouter = require("./routes/indexRoute")
const dishesRoute = require("./routes/dishRoute")
const userRouter = require("./routes/userRoutes")
const ordersRoute = require("./routes/orderRoutes")
const cookieParser = require("cookie-parser")
const parser = require("./utils/parser")
/* const jwt = require('/jwt'); */

const server = express()

require("dotenv").config();

// middleware
server.use(express.static('public'));
server.use(express.json());
server.use(cookieParser());

// use JWT auth to secure the api
/* server.use(jwt()); */

//create a json file

server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(parser)



/* ROUTES */
server.use("/", indexRouter)
server.use("/dishes", dishesRoute)
server.use("/users", userRouter)
server.use("/orders", ordersRoute)

// cookies

server.get('set-cookies', (req, res) => {

    res.cookie('newUser', false);
    res.cookie('isRegularClient', true, { maxOrders: 1000 * 60 * 60 * 20, httpOnly: true });

    res.send('you got the cookie');
});
server.get('/read-cookies', (req, res) => {

    const cookies = req.cookies;
    console.lig(cookies);

    res.json(cookies);
});

//Database - connect our application with mongoDB
/*  mongoose.connect(MongoUrl,options,callback) */
mongoose.connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log("connection established between app and mongodb"));




// no route match error
server.use((req, res, next) => {
    let error = new Error("no such route found")
    console.log(error.message);
    error.status = 404

    next(error)
})

//UNIVERSAL ERROR HANDLER

server.use((err, req, res, next) => {
    res.status(err.status || 500).send({ success: false, message: err.message })
})


server.listen(5000, () => console.log("backend server running"))
