const Tip = require("../models/Tip");

exports.add = (data) => Tip.create(data);
exports.getByMilestone = (milestoneId) => Tip.find({ milestoneId });
