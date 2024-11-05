import express from 'express';
import { signupValidation, loginValidation } from '../middlewares/authValidation.js';
import { login, signup } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signupValidation, signup );
router.post('/login', loginValidation, login );

export default router;