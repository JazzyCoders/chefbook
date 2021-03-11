/* EXTERNAL MODULES */
const express = require("express")
const dotenv = require("dotenv")
dotenv.config();

const mongoose = require("mongoose")
const indexRoute = require("./routes/indexRoute")
const recordsRoute = require("./routes/recordsRoute")
const usersRoute = require("./routes/usersRoute")
const ordersRoute = require("./routes/ordersRoute")


const config= require("./config/configuration")
//set PORT number
const PORT = 5000 || process.env.PORT 

/* INIT : creating express server*/
const app = express()

//serve static files
app.use(express.static("build"))

/* in express all the controllers are the middlewares */

/* USE MIDDLEWARES */
/* app.use(here specify middleware) */
if(config.environment==="development"){
  const morgan = require("morgan")
  app.use(morgan("dev"))
}

app.use(express.json())

const cors = (req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE")
  res.header("Access-Control-Allow-Headers","Content-Type , Accept , x-auth")
  res.header("Access-Control-Expose-Headers","x-auth")
  next()
}

app.use(cors)

 //connect our application with mongoDB
/*  mongoose.connect(MongoUrl,options,callback) */
 mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },()=>console.log("connection established between app and mongodb"));


/*   //open/connect
  //listening for event
  mongoose.connection.on("open", () => {
    console.log("database connection established");
  });
  //error/connection error
  //listening for event
  mongoose.connection.on("error", () => {
    console.log("Error found while connecting");
  }); */


/* ROUTES */
 app.use("/", indexRoute ) 
 app.use("/api/records", recordsRoute)
 app.use("/api/users", usersRoute)
 app.use("/api/orders" , ordersRoute)
 
 /* ERROR HANDLING */
 //404 no route match
 app.use((req,res,next)=>{
       let error = new Error("No such route found")
       console.log(error.message)
       error.status= 404;
       next(error)
 })

//universal Error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({
        success:false,message : err.message 
    })
})



/* Listening Port */
app.listen(PORT, ()=>console.log("server is running on port "+PORT))

/* MVC modal views controller (pattern) */
 