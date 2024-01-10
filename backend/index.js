import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Conncetd to MongoDB!')
}).catch((err)=>{
    console.log
})

const app = express();

app.use(express.json());
app.use(cookieParser())
app.listen(3000, ()=>{
    console.log('server is running in port 3000 !!')
})


app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err,req,res,next)=>{
    const statusCode = err.statuCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})