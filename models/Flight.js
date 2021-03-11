const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String,
  arrival: Date
});

const flightSchema = new Schema({
  airline: {
    type: String
  },

  airport: {
    type: String,
    default: "DEN"
  },
  flightNo: Number,
  depart: {
    type: Date,
    default: +new Date() + 30 * 24 * 60 * 60 * 1000
  },

  destinations: [destinationSchema],

  tickets: []
});

module.exports = mongoose.model("Flight", flightSchema);
