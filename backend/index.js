import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Conncetd to MongoDB!')
}).catch((err)=>{
    console.log
})

const app = express();

app.listen(3000, ()=>{
    console.log('server is running in port 3000 !!')
})