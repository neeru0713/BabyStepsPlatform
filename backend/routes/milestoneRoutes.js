const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
  getOne,
  getAllForUser,
  shareWithUser,
} = require("../controllers/milestoneController");
const auth = require("../middleware/authMiddleware");

router.use(auth);
router.post("/", create);
router.get("/", getAllForUser);
router.put("/:id", update);
router.delete("/:id", remove);
router.get("/:id", getOne);
router.post("/share/:id", shareWithUser);


module.exports = router;
