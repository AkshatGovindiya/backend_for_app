const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  location: {
    type: String,
  },
  organizer: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

module.exports = mongoose.model('Event', eventSchema);
