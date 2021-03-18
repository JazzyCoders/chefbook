const mongoose = require("mongoose");
const AddressSchema = require("./adressSchema");
const Schema = mongoose.Schema;
//hashing password and verifying/comparing passwords
const { encrypt, compare } = require("../lib/encryption");
//creating/signing token and verifying token
const JWT = require("jsonwebtoken");

const config = require("../config/configuration")
//definining our schema
/* User is a instance from Schema Class */
const UserSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    city:{type:String, required:true},
    phone:{type:Number, required:true},
    role:{
        type:String,
        enum:["Chef","User","Admin"],
        require:true
    },
    cart:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:"dishes"
    }],
    orders:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:"orders"
    }],
    receivedOrders:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:"orders"
    }],
    services:{
        type: [],
        required: this.role==="Chef"
    },
    cuisine:{
        type: String,
        required: this.role==="Chef"
    },
    description:{
        type: String,
        required: this.role==="Chef"
    },
    description:{
        type: String,
        required: this.role==="Chef"
    },
})

// this we are using to hashed password before storing into DB
  UserSchema.pre("save",function(next){
    console.log(this);
    // don't update or hashed password if its not modified
    if(!this.isModified("password") ) return next()
    
    // hashing the password 
    this.password = encrypt(this.password)
    next()
}) 



//it will compare user password with hashed password stored inside the database and return boolean value
UserSchema.methods.checkPassword = function (password) {
  console.log("method created in user model");
  return compare(password, this.password);
};

//once user is created ,we will call this function and this function will create a token for that user and push that token into tokens array.
UserSchema.methods.generateAuthToken = function () {
  const user = this;
  /* JWT.sign(Payload, SecretKey,Options) */
  console.log(process.env.SECRET_KEY)
  const token = JWT.sign({ _id: user._id, email: user.email }, config.secret_key);

  console.log(token);
  //we are pushing token into user's Tokens array
  user.tokens.push({ token: token });
  user.save()
  return token;
};

    



//verify auth token and finding that user into database
UserSchema.statics.findByToken = function (token) {
  const user = this;

  let decoded;
  try {
    decoded = JWT.verify(token, config.secret_key);
  } catch (err) {
    return;
  }

  let searchedUser = user
    .findOne({
      _id: decoded._id,
      "tokens.token": token,
    })
    .select("-password -__v");

  return searchedUser;
};

/* creating/exporting our users Model */
/* mongoose.model(<Collection>,<Document>) */
module.exports = mongoose.model("users", UserSchema); //model
