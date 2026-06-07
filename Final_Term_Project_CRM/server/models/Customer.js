const mongoose = require("mongoose");

// Stores a customer's contact details and sales pipeline information.
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Customer email is required"],
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Customer phone number is required"],
      trim: true,
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: ["Lead", "Active", "Inactive"],
      default: "Lead",
    },

    source: {
      type: String,
      enum: ["Website", "Referral", "Social Media", "Email", "Phone", "Other"],
      default: "Website",
    },

    value: {
      type: Number,
      min: [0, "Pipeline value cannot be negative"],
      default: 0,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
