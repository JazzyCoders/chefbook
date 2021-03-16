const express = require("express")
const morgan = require("morgan")
const app = express()

const FileSync = require("lowdb/adapters/FileSync");
//create a json file

app.use(morgan("dev"))
app.use(express.json())



/* ROUTES */
app.use("/", indexRoute ) 
app.use("/users", usersRoute)





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