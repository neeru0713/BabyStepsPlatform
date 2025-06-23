
const express = require("express");
const router = express.Router();

const { getAllExceptMe } = require("../controllers/userController.js"); 

const auth = require("../middleware/authMiddleware");

router.use(auth);
router.get("/others", getAllExceptMe); 

module.exports = router;
