const mongoose = require("mongoose");
/* const AddressSch = require("./addressScheme") */
const Schema = mongoose.Schema; 
/* //hashing password and verifying password
const { encrypt, compare } = require("../lib/encryption");
//  creating/signing  token and verifying token
const JWT = require("jsonwebtoken") */

/* const config = require("../config/configuration") */
// defining  our schema

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

// it will compare user password with hashed stored inside DB and return boolean value
UserSchema.methods.checkPassword = function(password) {
    console.log("method created in user model")
    return compare(password, this.password)
}

// once user is created , this is called to generate a token for the user and push into token array
UserSchema.methods.generateAuthToken = function() {
    const user =this;
    /* JWT.sign(payload,secretKey,Options) */
    const token = JWT.sign({_id:this._id,email:this.email},config.secret_key)
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

// creating and exporting our users  Model
/* mongoose.model(<collection>,<document>) */
module.exports = mongoose.model("users",UserSchema)