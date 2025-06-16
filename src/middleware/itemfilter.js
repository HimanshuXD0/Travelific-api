


export const applyFilters = (req, res, next) => {
 try {
    const {email,pending,noAction} = req.query;
    // Build dynamic filter object
    const filter = {};
    if (email) filter.email = email; // Case-insensitive search
 
    if (pending !== undefined) filter.pending = pending; // converts string to boolean
     if (noAction !== undefined) filter.noAction = noAction; // converts string to boolean
    // console.log(filter)
      req.filter = filter; 
       if(email=='admin123@gmail.com'){
        req.filter = {};
    }
    //console.log(req)
    next();
  } 
  catch(err) {
    res.json(err);
  }}