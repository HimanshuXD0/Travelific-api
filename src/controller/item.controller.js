import Item from "../models/item.model.js";
//const {Item} = require('../models/item.model');

export const getItem =async (req, res) => {
    try {
      //res.send("hello i am ruunig")
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  };

  export const postItem =  async (req, res) => {
    const newItem = new Item(req.body);
    try {
      const item = await newItem.save();
      res.json(item);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  };