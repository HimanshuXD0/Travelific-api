


export const applyFilters = (req, res, next) => {
 try {
    const { minPrice, maxPrice, name, category,email } = req.query;
    // Build dynamic filter object
    const filter = {};

    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
    //if (email) filter.email = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
    if (email) filter.email = email; // Case-insensitive search
    if (category) filter.category = category;
    // console.log(filter)
    req.filter = filter; 
    //console.log(req)
    next();
  } 
  catch(err) {
    res.json(err);
  }}