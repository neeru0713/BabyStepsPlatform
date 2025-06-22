const Milestone = require("../models/Milestone");

exports.create = (data) => Milestone.create(data);
exports.getAll = (userId) => Milestone.find({ userId });
exports.update = (id, data) =>
  Milestone.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Milestone.findByIdAndDelete(id);
