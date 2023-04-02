import express from 'express';
import connect from './database/mongodb.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionsAPI from './routes/TransactionsAPI.js';

const PORT=4000
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use('/transaction',TransactionsAPI);

await connect();


app.get('/',(req, res) => {
    res.send("Hello world!");
});

app.listen(PORT ,()=>{
    console.log("server running at http://localhost:4000");
})