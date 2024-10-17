// config.js
import dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import ItemRouter from './routes/item.router.js'; 
import AuthRouter from './routes/auth.router.js'; 
import cors from "cors";
import {connectDB} from './config/db.js';
dotenv.config();
//mongodb+srv://sharmahimanshu2429:kt3NNsi8q8qfXMyG@cluster0.hsq1v.mongodb.net/
const app = express();
const PORT = process.env.PORT||5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDB()

// API routes
app.use('/api/items',ItemRouter);
app.use('/api/auth',AuthRouter);
//console.log(AuthRouter)
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
