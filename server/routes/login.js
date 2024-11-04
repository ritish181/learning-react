import express from 'express';
import loginController from '../controllers/login.js';
const router = express.Router();

router.get("/", loginController);

router.get("/about", (req,res)=>{
    console.log("adfasdf")
    res.json("WWWWs")
})
export default router;