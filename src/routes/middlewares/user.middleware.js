exports.checkIfUserHasAccess = (req, res, next) => {
  //console.log("#####result",req.query);
  if (req.query.isSuperUser == 'true') {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};