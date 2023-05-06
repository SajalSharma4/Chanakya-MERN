import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {type:String,required:['First Name Required']},
  lastName: {type:String,required:['Last Name Required']},
  email: {type:String,required:['Email Required']},
  password: {type:String,required:['Password Required']},
},
{timestamps:true}
);

export default new mongoose.model("User", userSchema);
