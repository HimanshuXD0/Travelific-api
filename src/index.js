// config.js
import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import {getItem} from './controller/item.controller.js';
import {postItem}  from './controller/item.controller.js';
dotenv.config();
//mongodb+srv://sharmahimanshu2429:kt3NNsi8q8qfXMyG@cluster0.hsq1v.mongodb.net/
const app = express();
const PORT = process.env.PORT||5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect('mongodb+srv://sharmahimanshu2429:kt3NNsi8q8qfXMyG@cluster0.hsq1v.mongodb.net/mern_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// // Define a model
// const Item = mongoose.model('Item', new mongoose.Schema({
//   name: String,
//   price: String,
// }));

// API routes
app.get('/api/items',getItem);
app.post('/api/items',postItem);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
