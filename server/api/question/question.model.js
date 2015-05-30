'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  name: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correct: Number,
  room: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Question', QuestionSchema);