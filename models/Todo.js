const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    required: true,
    type: String
  },

  lastUpdated: {
    // required: true,
    type: Date
  },
  id: {
    type: String,
    required: true
  },

  //   name: {
  //     type: String,
  //     required: true
  //   },

  dateCreated: {
    // required: true,
    type: Date
  }
});

module.exports = Todo = mongoose.model('Todo', TodoSchema);
