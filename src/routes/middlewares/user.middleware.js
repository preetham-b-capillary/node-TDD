exports.checkIfUserHasAccess = (req, res, next) => {
  if (req.query.isSuperUser == 1) {
    next();
  } else {
    res.send('Access Denied');
  }
};