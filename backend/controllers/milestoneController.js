const milestoneService = require("../services/milestoneService");

exports.create = async (req, res) => {
    try {
      console.log("create cntoler")
    const data = await milestoneService.create({
      ...req.body,
      userId: req.user.id,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await milestoneService.getAll(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
  

exports.getOne = async (req, res) => {
  try {
    const milestone = await milestoneService.getById(req.params.id);
    if (!milestone)
      return res.status(404).json({ message: "Milestone not found" });
    res.json(milestone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
  
exports.update = async (req, res) => {
  try {
    const data = await milestoneService.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await milestoneService.remove(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};