


export const applyFilters = (req, res, next) => {
  try {
    const { email, pending, noAction } = req.query;

    // If admin, bypass all filters
    if (email === 'admin123@gmail.com') {
      req.filter = {};
      return next();
    }

    // Otherwise build dynamic filter
    const filter = {};
    if (email) filter.useremail = email;
    if (pending !== undefined) filter.pending = pending === 'true';
     //if (noAction !== undefined) filter.noAction = noAction === 'true';
    // if (noAction !== undefined) filter.noAction = noAction === 'true';

    req.filter = filter;
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};
