const mongoose = require("mongoose");
communitiesSchema = new mongoose.Schema({
  id: { type: String },
  version: { type: String },
  createdDate: { type: String },
  updatedDate: { type: String },
  counselorId: { type: String },
  communities: { type: String },
});
module.exports = mongoose.model("communities", communitiesSchema);
