const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['graph', 'bar', 'line', 'pie', 'table'],
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  // add other fields as necessary
});

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;