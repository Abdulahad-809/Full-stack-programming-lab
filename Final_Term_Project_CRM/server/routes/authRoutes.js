const express = require("express");
const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register route
router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({
      min: 6,
    }).withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// Login route
router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("Please enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

// Protected test/profile route
router.get("/profile", protect, getProfile);

module.exports = router;
