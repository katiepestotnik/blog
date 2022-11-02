// Dependencies
const mongoose = require("./connection");
const Artical = require('./article')
// Destructure schema and model from mongoose
const { Schema, model } = mongoose;

// Define author schema
const authorSchema = new Schema({
  name: String,
  articles: [Artical.schema]
  },
  { timestamps: true }
);

// Create author model
const Author = model("Author", authorSchema);

// Export model
module.exports = Author;
