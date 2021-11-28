const mongoose = require("mongoose");

const ClientSexualitySchema = new mongoose.Schema(
  {
    counselorId: {
      type: String,
      required: true,
    },

    sexuality: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const ClientSexuality = mongoose.model(
  "ClientSexuality",
  ClientSexualitySchema
);
module.exports = ClientSexuality;
