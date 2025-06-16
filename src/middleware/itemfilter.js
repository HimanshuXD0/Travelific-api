


export const applyFilters = (req, res, next) => {
 try {
    const {email,pending} = req.query;
    // Build dynamic filter object
    const filter = {};
    if (email && email!="admin123@gmail.com") filter.email = email; // Case-insensitive search
    if (pending !== undefined) filter.pending = pending === 'true'; // converts string to boolean
    if (noAction !== undefined) filter.pending = pending === 'true'; // converts string to boolean
    // console.log(filter)
    req.filter = filter; 
    //console.log(req)
    next();
  } 
  catch(err) {
    res.json(err);
  }}