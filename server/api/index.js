import express from 'express';
import authRouter from './auth';

const app = express();

app.use(authRouter)

export default app;