const mongoose = require("mongoose");
appointmentSchema = new mongoose.Schema({
  version: {
    type: String,
  },
  clientId: {
    type: String,
  },
  bookingId: {
    type: String,
  },
});
module.exports = mongoose.model("appointment", appointmentSchema);
