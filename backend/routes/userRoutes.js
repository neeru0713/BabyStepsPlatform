// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const { getAllExceptMe } = require("../controllers/userController.js"); // ✅ Check this path

const auth = require("../middleware/authMiddleware");

router.use(auth);
router.get("/others", getAllExceptMe); // ✅ add middleware if needed

module.exports = router;
