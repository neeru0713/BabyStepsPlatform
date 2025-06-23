const mongoose = require("mongoose");
const milestoneSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  date: Date,
  notes: String,
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("Milestone", milestoneSchema);
