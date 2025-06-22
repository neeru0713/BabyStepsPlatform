const express = require("express");
const router = express.Router();
const { add, getByMilestone } = require("../controllers/tipController");

router.post("/:id/tips", add);
router.get("/:id/tips", getByMilestone);
module.exports = router;
