import mongoose, { model } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then( ()=>{
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed to connect");
})


const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 3
    }
}, 
{timestamps: true}
)

const collection = new nomgoose.model("Collection1", LoginSchema);

model.exports= collection;