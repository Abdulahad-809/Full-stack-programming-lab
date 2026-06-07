const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createInvoice,
  getInvoices,
  getInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

const router = express.Router();

router.use(protect);
router.get("/", getInvoices);
router.post("/", createInvoice);
router.get("/:id", getInvoice);
router.delete("/:id", deleteInvoice);

module.exports = router;
