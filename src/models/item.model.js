

import  mongoose from 'mongoose';
const itemSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;