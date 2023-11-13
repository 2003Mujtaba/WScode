require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Initialize the Express application
const app = express();
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(methodOverride('_method'));

// Set up EJS view engine if not already done
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully.');

  // Start the server only after MongoDB connection is successful
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Optional: Exit the process if MongoDB connection fails
});

// Import the model
const Assignment = require('./models/Assignment');

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('home'); // This will render the home.ejs file
});

// Route to display all assignments
app.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find({});
    res.render('assignments', { assignments });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving assignments from database');
  }
});
// Route to display the form for a new assignment
app.get('/assignments/new', (req, res) => {
    res.render('new-assignment'); // This EJS file will contain the form
  });

// Route to handle the form submission for creating a new assignment
app.post('/assignments', async (req, res) => {
    try {
      const newAssignment = new Assignment(req.body);
      await newAssignment.save();
      res.redirect('/assignments'); // Redirect to the list of all assignments
    } catch (err) {
      console.error(err);
      res.status(500).send('Error creating a new assignment');
    }
  });
// Route to display the form to edit an existing assignment
app.get('/assignments/:id/edit', async (req, res) => {
    try {
      const assignment = await Assignment.findById(req.params.id);
      res.render('edit-assignment', { assignment }); // Pass the assignment to the EJS file
    } catch (err) {
      console.error(err);
      res.status(500).send('Error loading the assignment to edit');
    }
  });
    
// Route to handle the form submission for updating an existing assignment
app.put('/assignments/:id', async (req, res) => {
    try {
      await Assignment.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/assignments');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating the assignment');
    }
  });
  
// Route to handle the deletion of an assignment
app.delete('/assignments/:id', async (req, res) => {
    try {
      await Assignment.findByIdAndRemove(req.params.id);
      res.redirect('/assignments');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting the assignment');
    }
  });
  

// Define the PORT
const PORT = process.env.PORT || 3000;
