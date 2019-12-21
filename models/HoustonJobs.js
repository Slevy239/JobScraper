const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let HoustonSchema = new Schema({
    // `title` is required and of type String
    title: {
      type: String,
      required: true
    },
  company: {
      type: String,
      required: false
  },
  location: {
      type: String,
      required: true,
  },
  salary: {
      type: String,
      required: false
  },
  link: {
      type: String,
      required: true
  },
  summary: {
      type: String,
      required: true
  }
  
  });
  
  // This creates our model from the above schema, using mongoose's model method
  var Houston = mongoose.model("HoustonJobs", HoustonSchema);
  
  // Export the Article model
  module.exports = Houston;
  