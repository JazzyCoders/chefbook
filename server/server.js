const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const indexRouter = require("./routes/indexRoute")
const dishesRoute = require("./routes/dishRoute")
const userRouter = require("./routes/userRoutes")
const orderRouter = require("./routes/orderRoutes")
const app = express()

require("dotenv").config();



//create a json file

app.use(morgan("dev"))
app.use(express.json())

const cors =(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers","Content-Type, Accept, x-auth")
    res.header("Access-Control-Allow-Expose","x-auth")
    res.header("Access-Control-Expose-Headers","x-auth")

    next()
}

app.use(cors)


/* ROUTES */
app.use("/", indexRouter)
app.use("/dishes", dishesRoute)
app.use("/users", userRouter)
app.use("/order", orderRouter)


 //connect our application with mongoDB
/*  mongoose.connect(MongoUrl,options,callback) */
mongoose.connect( process.env.MONGO_ATLAS,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },()=>console.log("connection established between app and mongodb"));



  
// no route match error
app.use((req,res,next)=>{
    let error =  new Error("no such route found")
        console.log(error.message);
    error.status =404

    next(error)
})

//UNIVERSAL ERROR HANDLER

app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({success:false ,message:err.message})
})


app.listen(5001 ,()=>console.log("backend server running"))
