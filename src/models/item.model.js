

import  mongoose from 'mongoose';
const itemSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  }
}, { strict: false });

const Item = mongoose.model("Item", itemSchema);

export default Item;