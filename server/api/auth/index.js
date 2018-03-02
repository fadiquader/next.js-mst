import express from 'express';
import { authController } from './auth';

const router = express.Router();

router.get('/me', authController.me);
router.post('/login', authController.login);
router.post('/signout', authController.signout);

export default router