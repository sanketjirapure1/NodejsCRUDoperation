const mongoose = require("mongoose");
associationSchema = new mongoose.Schema(
  {
    counselorId: { type: String },
    organizationName: { type: String },
    country: { type: String },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("association", associationSchema);
