'use strict';

const mongoose = require('mongoose');

const touchSchema = new Mongoose.Schema({
  user: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  time: {
    type: Date,
    required: false,
    default: Date.now
  },

  city: {
    type: String,
    required: true
  },

  tickles: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Touch', touchSchema, 'Touch');
