const mongoose = require("mongoose");
insuranceSchema = new mongoose.Schema(
  {
    counselorId: {
      type: String,
    },
    insurance: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("insurance", insuranceSchema);
