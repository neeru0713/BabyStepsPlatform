const Milestone = require("../models/Milestone");

exports.create = (data) => Milestone.create(data);
exports.getAll = async (userId) => {
  return await Milestone.find({ userId }).sort({ date: -1 });
};


exports.getById = async (id) => {
  return await Milestone.findById(id);
};

  
exports.update = (id, data) =>
  Milestone.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Milestone.findByIdAndDelete(id);



exports.shareWithUser = async (milestoneId, userId) => {
  const milestone = await Milestone.findById(milestoneId);
  if (!milestone) {
    const error = new Error("Milestone not found");
    error.status = 404;
    throw error;
  }

  if (!milestone.sharedWith.includes(userId)) {
    milestone.sharedWith.push(userId);
    await milestone.save();
  }
};
