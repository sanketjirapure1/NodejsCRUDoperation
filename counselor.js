const mongoose = require("mongoose");

const CounselorSchema = new mongoose.Schema({
  email: { type: String },
  userId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  status: { type: String },
  mobileNumber: { type: String },
});

const Counselor = mongoose.model("Counselor", CounselorSchema);
module.exports = Counselor;
