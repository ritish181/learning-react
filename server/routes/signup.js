import express from 'express';
import Signup from '../controllers/signup.js';
const router = express.Router();

router.post('/', Signup);

export default router;