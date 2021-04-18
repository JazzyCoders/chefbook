const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { encrypt, compare } = require("../lib/encryption");

const JWT = require("jsonwebtoken");
//const config = require("../config/configuration") 
//defining our schema


const UserSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    img: {type: String, required:false},
    city:{type:String, required:true},
    phone:{type:String, required:true},
    role:{
        type:String,
        enum:["Chef","User"],
        require:true
    },
    chefHandle: {
        type: String,
        required: this.role==="Chef"
    },
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
    about:{
        type: String,
        required: this.role==="Chef"
    },
    tokens: [{ token: { type: String, required: true } }],

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
    }]

})

UserSchema.pre("save",function(next){
  console.log(this);
  // don't update or hashed password if its not modified
  if(!this.isModified("password") ) return next()
  
  // hashing the password 
  this.password = encrypt(this.password)
  next()
})

// it will compare user password with hashed stored inside DB and return boolean value
UserSchema.methods.checkPassword = function(password) {
  console.log("method created in user model")
  return compare(password, this.password)
}

// once user is created , this is called to generate a token for the user and push into token array
UserSchema.methods.generateAuthToken = function() {
  const user =this;
  /* JWT.sign(payload,secretKey,Options) */
  const token = JWT.sign({_id:this._id,email:this.email},process.env.SECRET_KEY)
  console.log(token);
  // we push to store
  user.tokens.push({token:token})
  user.save()
  return token
}
// public fields
UserSchema.methods.getPublicFields=function(){
  const user = this
  return{
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      _id:user._id,
      role:user.role
  }
}

// verifying auth token  and finding that user into the DB
UserSchema.statics.findByToken=function(token) {
  const user = this;
  let decoded;

  try {
      decoded=JWT.verify(token,config.secret_key)
  } catch (err) {
      return
  }

  let searchedUser = user.findOne({
      _id:decoded._id,
      "tokens.token":token}).select("-password, -_v")
  
  return searchedUser
}


module.exports = mongoose.model("users",UserSchema)