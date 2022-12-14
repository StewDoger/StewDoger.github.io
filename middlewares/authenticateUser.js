module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.send("You're not allowed to view this content! please log in first!");
    return;
  }
  //else continue
  next();
};

module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/loginuser");
  }
  next();
};