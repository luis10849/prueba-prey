import express, { Application, NextFunction, Request, Response } from 'express';
import instructionRoutes from './routes/instruction.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

// settings
app.set('port', 3000);

// middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/instruction', instructionRoutes);
app.use("/hello", (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "Hello world" });
});

export default app;