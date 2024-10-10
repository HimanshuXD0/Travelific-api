require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
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

// Define a model
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  price: String,
}));

// API routes
app.get('/api/items', async (req, res) => {
  try {
    //res.send("hello i am ruunig")
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
