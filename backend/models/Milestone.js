const milestoneSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  date: Date,
  notes: String,
});
module.exports = mongoose.model("Milestone", milestoneSchema);
