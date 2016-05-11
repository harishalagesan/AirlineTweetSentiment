var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Airline' }
});

mongoose.model('Comment', CommentSchema);