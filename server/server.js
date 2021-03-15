const express = require("express")
const morgan = require("morgan")
const lowdb = require("lowdb")
const app = express()

const FileSync = require("lowdb/adapters/FileSync");
//create a json file
const adopter = new FileSync("db.json");

const db = lowdb(adopter);

app.use(morgan("dev"))
app.use(express.json())

//create GET / route
app.get("/", (req, res) => {
    console.log("I am Main Server Route");
    res.send("Hi from Server");
  });
  
  //get single user from database
  app.get("/users/:id",(req,res)=>{
      let idParam= parseInt(req.params.id)
      let user = db.get("users").find({id:idParam}).value() 
      res.json({success:true,user:user})
      
  })
  //Crud operation 
  //reading data from database
  /* http://localhost:3000/users */
  app.get("/users", (req,res)=>{
      //get all users from lowdb
      let users = db.get("users").sortBy("id").value()
      //sending reponse to our client
      res.json({users:users})
      //end process 
  })
  
  
  //create/add data into your database
  app.post("/users",(req,res)=>{
     console.log(req.body)
     //adding and storing data in lowdb
     db.get("users").push(req.body).write()
      res.json({success:true, message:"data stored"})
  })
  
  //update data into our database
  app.patch("/users/:id",(req,res)=>{
          console.log(req.params)
          let idParam = parseInt(req.params.id)
  
          db.get("users")
          .find({id:idParam})
          .assign(req.body)
          .write()
  
          res.json({success:true,message:"user updated"})
  })
  
  
  //delete all users
  app.delete("/users",(req,res)=>{
      db.get("users").remove().write()
      res.json({success:true,message:"all users Deleted"})
  })
  //Delete data from database
  
  app.delete("/users/:id", (req,res)=>{
      let idParam= parseInt(req.params.id)
      db.get("users").remove({id:idParam}).write()
  
      res.json({success:true,message:"record deleted"})
  })



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