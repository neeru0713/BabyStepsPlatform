const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
console.log("jwtSecret in login : ", jwtSecret);
const registerUser = async ({ email, username, password }) => {
  if (!email || !username || !password) {
    throw new Error("All fields are required");
  }

  const exists = await User.findOne({ $or: [{ email }, { username }] });
  if (exists) {
    throw new Error("Email or username already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, username, password: hashedPassword });
  await newUser.save();
  return newUser;
};

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, jwtSecret, {
    expiresIn: "1d",
  });

  return { user, token };
};

module.exports = { registerUser, loginUser };
