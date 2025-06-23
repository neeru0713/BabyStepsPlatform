// controllers/userController.js
const User = require("../models/User.js");
exports.getAllExceptMe = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } }).select(
      "_id email name"
    );
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
