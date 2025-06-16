/*
In a controller file, you define functions that handle the business logic for each route. 
The goal of using controllers is to keep the route files clean and minimal,
 with all the actual logic moved to the controller layer.
*/


import { request } from "express";
import Item from "../models/item.model.js";
//const {Item} = require('../models/item.model');

export const getItem =async (req, res) => {
    try {
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * limit;

      const items = await Item.find(req.filter).skip(skip).limit(limit);
      const total = await Item.find(req.filter).countDocuments();
      //res.json({items, totalPages: Math.ceil(total / limit), currentPage: parseInt(page) });
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

  export const updateItem = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated item
      runValidators: true, // validate against schema
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      message: "Item Updated",
      success: true,
      updatedItem,
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};