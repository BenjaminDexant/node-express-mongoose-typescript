import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
const app = express();
import router from './src/routes/routes';

mongoose.connect(process.env.DB_PORT!)
    .then(() => console.log("Connected to Mongo database 🌿"))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/V1/wilder', router);
app.listen(process.env.PORT, () => console.log(`SERVER IS RUNNING ON PORT : ${process.env.PORT} ✅  `) );
