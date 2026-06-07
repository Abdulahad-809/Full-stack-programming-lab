const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Customer = require("../models/Customer");
const sampleCustomers = require("../utils/sampleCustomers");

// Controllers use the Customer model to read and change the logged-in user's data.
const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const validationError = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return false;
  }

  res.status(400).json({
    success: false,
    message: errors.array()[0].msg,
    errors: errors.array(),
  });
  return true;
};

const customerFields = (body) => ({
  name: body.name,
  email: body.email,
  phone: body.phone,
  company: body.company,
  status: body.status,
  source: body.source,
  value: body.value,
  notes: body.notes,
});

const addCustomer = async (req, res) => {
  try {
    if (validationError(req, res)) return;

    const customer = await Customer.create({
      ...customerFields(req.body),
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Customer added successfully",
      customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Unable to add customer",
    });
  }
};

const getCustomers = async (req, res) => {
  try {
    const { search = "", status = "" } = req.query;
    const query = { createdBy: req.user.id };

    if (search.trim()) {
      query.name = { $regex: escapeRegExp(search.trim()), $options: "i" };
    }

    if (["Lead", "Active", "Inactive"].includes(status)) {
      query.status = status;
    }

    const customers = await Customer.find(query).sort({ createdAt: -1 });

    res.json({ success: true, count: customers.length, customers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch customers",
    });
  }
};

const getCustomer = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    const customer = await Customer.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!customer) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    res.json({ success: true, customer });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to fetch customer" });
  }
};

const updateCustomer = async (req, res) => {
  try {
    if (validationError(req, res)) return;

    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    const customer = await Customer.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      customerFields(req.body),
      { new: true, runValidators: true }
    );

    if (!customer) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    res.json({
      success: true,
      message: "Customer updated successfully",
      customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Unable to update customer",
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    const customer = await Customer.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!customer) {
      return res.status(404).json({ success: false, message: "Customer not found" });
    }

    res.json({ success: true, message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to delete customer" });
  }
};

const seedCustomers = async (req, res) => {
  try {
    await Customer.updateMany(
      { createdBy: req.user.id, source: "Event" },
      { $set: { source: "Phone" } }
    );

    const existingCount = await Customer.countDocuments({ createdBy: req.user.id });

    if (existingCount >= 15) {
      return res.json({
        success: true,
        message: "You already have at least 15 customers",
        count: existingCount,
      });
    }

    const needed = 15 - existingCount;
    const records = sampleCustomers.slice(0, needed).map((customer) => ({
      ...customer,
      createdBy: req.user.id,
    }));
    await Customer.insertMany(records);

    res.status(201).json({
      success: true,
      message: `${records.length} sample customers loaded successfully`,
      count: existingCount + records.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to load sample customers",
    });
  }
};

module.exports = {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  seedCustomers,
};
