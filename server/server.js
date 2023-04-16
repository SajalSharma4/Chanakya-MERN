import express from 'express';
import connect from './database/mongodb.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionsAPI from './routes/TransactionsAPI.js';
import AuthAPI from './routes/AuthAPI.js';
import passport from 'passport';
import passportConfig from './config/passport.js';


const PORT=4000
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

app.use('/transaction',TransactionsAPI);
app.use('/auth',AuthAPI);


await connect();


app.get('/',(req, res) => {
    res.send("Hello world!");
});

app.listen(PORT ,()=>{
    console.log("server running at http://localhost:4000");
})