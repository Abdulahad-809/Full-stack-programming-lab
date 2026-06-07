const express = require("express");
const { body } = require("express-validator");
const {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  seedCustomers,
} = require("../controllers/customerController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const customerValidation = [
  body("name").trim().notEmpty().withMessage("Customer name is required"),
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("phone").trim().notEmpty().withMessage("Phone number is required"),
  body("company").trim().notEmpty().withMessage("Company name is required"),
  body("status")
    .optional()
    .isIn(["Lead", "Active", "Inactive"])
    .withMessage("Status must be Lead, Active, or Inactive"),
  body("source")
    .optional()
    .isIn(["Website", "Referral", "Social Media", "Email", "Phone", "Other"])
    .withMessage("Please select a valid source"),
  body("value")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Pipeline value cannot be negative"),
];

router.use(protect);
router.get("/", getCustomers);
router.post("/", customerValidation, addCustomer);
router.post("/seed", seedCustomers);
router.get("/:id", getCustomer);
router.put("/:id", customerValidation, updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
