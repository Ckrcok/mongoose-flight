const Flight = require("../models/Flight");

//exports
module.exports = {
  viewFlights,
  createFlight,
  create,
  show,
  add,
};

function viewFlights(req, res) {
  Flight.find({}, function (err, flights) {
    console.log(flights);
    res.render("flight/index", { flights });
  });
}

function createFlight(req, res) {
  res.render("flight/create");
}

async function create(req, res) {
  console.log(req.body);
  var flight = new Flight(req.body);
  await flight.save();
  res.redirect("/flight/index");
}

async function show(req, res) {
  let flight = await Flight.findById(req.params.id);
  res.render("flight/show", { flight });
}

async function add(req, res) {
  let flight = await Flight.findById(req.params.id);

  let destination = {
    airport: req.body.airport,
    arrival: req.body.arrival,
  };
  console.log("this is the destination airpot " + destination.airport);

  console.log("this is the destination time arriival " + destination.arrival);

  console.log("this is the FLIGHT stuff " + flight);
  flight.destinations.push(destination);
  await flight.save();
  res.redirect("/flight/show/" + flight.id);
}
