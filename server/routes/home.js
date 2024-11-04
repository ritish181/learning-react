import { getInfo } from "../controllers/home";
import express from 'express'
const router= express.Router();

router.get('/', getInfo);

export default router;