// Import the necessary Mongoose classes
const { Schema, model } = require('mongoose');

// Define the schema for an assignment
// This includes the data structure and types for each field you want to store in the database.
const assignmentSchema = new Schema({
  title: {
    type: String,     // Data type for the title field
    required: true    // Makes this field required
  },
  description: {
    type: String,     // Data type for the description field
    required: false   // This field is not required
  },
  dueDate: {
    type: Date,       // Stores a date
    required: true    // This field is required
  },
  priority: {
    type: String,     // Could be 'High', 'Medium', 'Low'
    required: true,
    enum: ['High', 'Medium', 'Low'] // Enum restricts the value to one of these options
  }
});

// Create a model from the schema
// The model is what you use to interact with the collection of documents in the database.
const Assignment = model('Assignment', assignmentSchema);

// Export the model
// This allows you to import the model in other parts of your application.
module.exports = Assignment;
