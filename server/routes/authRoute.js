import express from 'express';
import { signupValidation, loginValidation } from '../middlewares/authValidation';
import { login, signup } from '../controllers/authController';

const router = express.Router();

router.post('/signup', signupValidation, signup );
router.post('/login', loginValidation, login );

export default router;