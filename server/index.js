import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());  

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})