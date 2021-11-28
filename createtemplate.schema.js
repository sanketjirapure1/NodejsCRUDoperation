const mongoose = require("mongoose");

const CreateTemplateSchema = new mongoose.Schema({
  templatename: {
    type: String,
  },
  subject: {
    type: String,
  },
  sender: {
    type: String,
  },
  // header: {
  //   type: String,
  // },
  emailbody: {
    type: String,
  },
  // snippent:{
  //   type:String,
  // },
  // slug:{
  //   type:{ type:String,slug:'title',slug_padding_size: 2 },
  // },
  // footer: {
  //   type: String,
  // },
});

const CreateTemplate = mongoose.model("CreateTemplate", CreateTemplateSchema);
module.exports = CreateTemplate;

// const mongoose = require("mongoose");

// const CreateTemplateSchema = new mongoose.Schema({
//   templatename: {
//     type: String,
//   },
//   subject: {
//     type: String,
//   },
//   sender: {
//     type: String,
//   },
//   header: {
//     type: String,
//   },
//   emailbody: {
//     type: String,
//   },
//   footer: {
//     type: String,
//   },
// });

// const CreateTemplate = mongoose.model("CreateTemplate", CreateTemplateSchema);
// module.exports = CreateTemplate;

