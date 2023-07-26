let mongoose = require('mongoose');

// Create Model of Contact

let contactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    collection: "contacts" // Specify the collection name
  }
);

module.exports = mongoose.model('Contact', contactSchema);
