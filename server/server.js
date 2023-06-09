import express from 'express';
import connect from './database/mongodb.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionsAPI from './routes/TransactionsAPI.js';
import UserApi from './routes/UserApi.js';
import AuthAPI from './routes/AuthApi.js';
import passport from 'passport';
import passportConfig from './config/passport.js';
import * as dotenv from 'dotenv';

dotenv.config();


const PORT=4000
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

app.use('/transaction',TransactionsAPI);
app.use('/auth',AuthAPI);
app.use('/user',UserApi);


await connect();


app.get('/',(req, res) => {
    res.send("Hello world!");
});

app.listen(PORT ,()=>{
    console.log("server running at http://localhost:4000");
})