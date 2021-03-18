const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const indexRouter = require("./routes/indexRoute")
const dishesRoute = require("./routes/dishRoute")
const app = express()



//create a json file

app.use(morgan("dev"))
app.use(express.json())



/* ROUTES */
app.use("/", indexRouter)
app.use("/dishes", dishesRoute)


 //connect our application with mongoDB
/*  mongoose.connect(MongoUrl,options,callback) */
mongoose.connect( "mongodb://127.0.0.1:27017/chefbook", {
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


app.listen(5000, ()=>console.log("backend server running"))