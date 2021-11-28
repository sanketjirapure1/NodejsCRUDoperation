const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    email: { type: String },
    userId: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    status: { type: String },
    mobileNumber: { type: String },
  },

  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
