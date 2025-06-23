const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
  getOne,
} = require("../controllers/milestoneController");
const auth = require("../middleware/authMiddleware");

router.use(auth);
router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);
router.get("/:id", getOne);
module.exports = router;
