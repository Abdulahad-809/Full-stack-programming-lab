const mongoose = require("mongoose");
const Invoice = require("../models/Invoice");
const Customer = require("../models/Customer");

// Invoice controllers validate ownership before using the Mongoose models.
const makeInvoiceNumber = () =>
  `INV-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 90 + 10)}`;

const createInvoice = async (req, res) => {
  try {
    const { customer: customerId, services = [], summary = "", invoiceDate } = req.body;

    if (!mongoose.isValidObjectId(customerId)) {
      return res.status(400).json({ success: false, message: "Please select a customer" });
    }

    const customer = await Customer.findOne({
      _id: customerId,
      createdBy: req.user.id,
    });

    if (!customer) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Add at least one invoice service",
      });
    }

    const cleanServices = services.map((service) => {
      const quantity = Number(service.quantity);
      const price = Number(service.price);

      if (
        !service.description?.trim() ||
        !Number.isFinite(quantity) ||
        !Number.isFinite(price) ||
        quantity < 1 ||
        price < 0
      ) {
        throw new Error("Each service needs a description, quantity, and valid price");
      }

      return {
        description: service.description.trim(),
        quantity,
        price,
        amount: quantity * price,
      };
    });

    const totalAmount = cleanServices.reduce((total, item) => total + item.amount, 0);
    const invoice = await Invoice.create({
      invoiceNumber: makeInvoiceNumber(),
      customer: customer._id,
      services: cleanServices,
      totalAmount,
      summary,
      invoiceDate: invoiceDate || new Date(),
      createdBy: req.user.id,
    });

    await invoice.populate("customer", "name email phone company");
    res.status(201).json({
      success: true,
      message: "Invoice generated successfully",
      invoice,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Unable to generate invoice",
    });
  }
};

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ createdBy: req.user.id })
      .populate("customer", "name email phone company")
      .sort({ createdAt: -1 });
    res.json({ success: true, count: invoices.length, invoices });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to fetch invoices" });
  }
};

const getInvoice = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    const invoice = await Invoice.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    }).populate("customer", "name email phone company");

    if (!invoice) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    res.json({ success: true, invoice });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to fetch invoice" });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    const invoice = await Invoice.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!invoice) {
      return res.status(404).json({ success: false, message: "Invoice not found" });
    }

    res.json({ success: true, message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to delete invoice" });
  }
};

module.exports = { createInvoice, getInvoices, getInvoice, deleteInvoice };
