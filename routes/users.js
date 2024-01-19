const mongoose = require("mongoose")
require("dotenv").config()
const plm = require("passport-local-mongoose")

mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{
  console.log("connected to db")
})
.catch((err)=>{
  console.log(err)
})

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  bio: String,
  posts: [
    {
      type:mongoose.Schema.Types.ObjectId, 
          ref:"post"
  }
]
  
})

userSchema.plugin(plm)

module.exports = mongoose.model("user",userSchema)