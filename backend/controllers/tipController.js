const tipsService = require("../services/tipsService");

exports.add = async (req, res) => {
  try {
    const tip = await tipsService.add({
      milestoneId: req.params.id,
      ...req.body,
    });
    res.status(201).json(tip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getByMilestone = async (req, res) => {
  try {
    const tips = await tipsService.getByMilestone(req.params.id);
    res.json(tips);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
