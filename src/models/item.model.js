

import  mongoose from 'mongoose';
const itemSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  }
});

const Item = mongoose.model("Item", itemSchema);

export default Item;