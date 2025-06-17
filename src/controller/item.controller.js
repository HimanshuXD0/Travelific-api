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

      const items = await Item.find(req.filter);
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
  try {
    const { id } = req.params;
    const videoPath = req.file ? req.file.path : null;

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      
      { video: videoPath ,
        pending: false,
      },
      { new: true }

    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      success: true,
      message: 'Video uploaded successfully',
      updatedItem
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
  
};