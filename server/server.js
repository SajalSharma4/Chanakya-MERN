import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT=4000
const app=express();

app.use(cors);

await mongoose.connect
("mongodb+srv://SajalSharma:chanakyamern@chanakyamern.vxtb781.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB Connection Successful"));

app.get('/',(req, res) => {
    res.send("Hello world!");
});

app.listen(PORT ,()=>{
    console.log("server running at http://localhost:4000");
})