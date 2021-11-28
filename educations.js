const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    version: { type: String },
    country: { type: String },
    degree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;
