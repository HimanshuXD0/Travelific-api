/*
In a controller file, you define functions that handle the business logic for each route. 
The goal of using controllers is to keep the route files clean and minimal,
 with all the actual logic moved to the controller layer.
*/


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
      res.json({
        message:"Item Added",
        success:true,
      });
    } catch (err) {
      res.status(500).send('Server Error');
    }
  };