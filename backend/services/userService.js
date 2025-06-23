const User = require("../models/User");

exports.getAllForUser = async (currentUserId) => {
  return await User.find({ _id: { $ne: currentUserId } }).select(
    "_id email name"
  );
};
