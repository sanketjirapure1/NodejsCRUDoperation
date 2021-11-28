const mongoose = require("mongoose");
therapySchema = new mongoose.Schema(
  {
    counselorId: {
      type: String,
    },
    therapy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("therapy", therapySchema);
