const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
console.log("jwtSecret in auth : ", jwtSecret);
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const user = jwt.verify(token, jwtSecret);
    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
  }
};
