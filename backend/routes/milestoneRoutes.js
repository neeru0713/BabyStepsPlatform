const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
} = require("../controllers/milestoneController");
const auth = require("../middleware/authMiddleware");

router.use(auth);
router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);
module.exports = router;
