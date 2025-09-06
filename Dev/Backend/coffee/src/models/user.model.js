import mongoose ,{mongo, Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username : {
        type :String,
        unique : true,
        required : true,
        lowercase : true, 
        trim : true,
        index : true
    },
    email : {
        type :String,
        unique : true,
        required : true,
        lowercase : true, 
        trim : true,
    },
    fullname : {
        type :String,
        required : trim, 
        trim : true,
        index : true
    },
    avatar : {
        type : String, // cloudnary url
        required : true
    },
    coverImage : {
        type : String
    },
    watchHistory : [{
        type : Schema.Types.ObjectId,
        ref : "Video"
    }],
    password : {
        type : String ,
        required : [true,"Password is required"]
    },
    refreshToken : {
        type : String,
    }
} , 
{
    timestamps:true
})

 userSchema.pre('save',async function (next){
    if(!(this.isModified("password"))) return next();
    this.password = bcrypt.hash(this.password ,10)
    next()
 })

export const User = mongoose.Model("User",userSchema)