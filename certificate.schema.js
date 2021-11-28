const mongoose = require("mongoose");
certificateSchema = new mongoose.Schema(
  {
    version: {
      type: Number,
    },

    counselorId: {
      type: String,
    },
    universityName: {
      type: String,
    },
    degree: {
      type: String,
    },
    yearGraduated: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("certificate", certificateSchema);
