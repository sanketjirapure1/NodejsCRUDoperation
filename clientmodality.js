const mongoose = require("mongoose");

const ClientModalitySchema = new mongoose.Schema(
  {
    counselorId: {
      type: String,
      required: true,
    },

    modality: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const ClientModality = mongoose.model("ClientModality", ClientModalitySchema);
module.exports = ClientModality;
