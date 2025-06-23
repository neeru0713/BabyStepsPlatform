const mongoose = require("mongoose");
const tipSchema = new mongoose.Schema({
  milestoneId: { type: mongoose.Schema.Types.ObjectId, ref: "Milestone" },
  text: String,
  contributor: { type: String, default: "Anonymous" },
});
module.exports = mongoose.model("Tip", tipSchema);
