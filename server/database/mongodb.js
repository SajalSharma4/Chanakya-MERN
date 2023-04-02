import mongoose from "mongoose";

async function connect(){
    await mongoose.connect
    ("mongodb+srv://SajalSharma:chanakyamern@chanakyamern.vxtb781.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB Connection Successful");
}


export default connect;