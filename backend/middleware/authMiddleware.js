const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const user = jwt.verify(token, "secret");
    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
  }
};
