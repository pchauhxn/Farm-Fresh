const mongoose = require("mongoose");


// Define a schema and model using Mongoose
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // address:[{
  //   type:String,
  // }]
});

const User = mongoose.model("collection", userSchema);

module.exports = User;
