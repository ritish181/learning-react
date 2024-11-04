import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());  

app.use('/login',loginRouter );
app.use('/signup', signupRouter);
app.use('/auth', authRouter);

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})