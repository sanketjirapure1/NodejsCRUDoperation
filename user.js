const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String },
  mobileNumber: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  googleId: { type: String },
  enabled: { type: String },
  
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
