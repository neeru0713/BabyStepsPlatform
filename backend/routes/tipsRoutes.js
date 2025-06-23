const express = require("express");
const router = express.Router();
const { add, getByMilestone } = require("../controllers/tipController");

router.post("/:id/", add);
router.get("/:id/", getByMilestone);
module.exports = router;
