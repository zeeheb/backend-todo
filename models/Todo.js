const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    // required: true,
    type: String
  },

  lastUpdated: {
    // required: true,
    type: Date,
    default: Date.now
  },
  id: {
    type: String
    // required: true
  },

  completed: {
    type: Boolean
  },

  dateCreated: {
    // required: true,
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model('Todo', TodoSchema);
