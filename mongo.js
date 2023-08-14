const mongoose = require("mongoose");

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb+srv://singhalrakshit0824:rakshit0824@cluster0.tkhkpoc.mongodb.net/?retryWrites=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB using Mongoose");
})
.catch((error) => {
  console.error("Error connecting to MongoDB using Mongoose:", error);
});

// Define a schema and model using Mongoose
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const CollectionModel = mongoose.model("collection", newSchema);

module.exports = CollectionModel;
