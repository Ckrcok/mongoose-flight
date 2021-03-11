const Flight = require("../models/Flight");
const Ticket = require("../models/Ticket");

//exports
module.exports = {
  viewFlights,
  createFlight,
  create,
  show,
  add,
  createTicket,
  giveTicket
};

function viewFlights(req, res) {
  Flight.find({}, function(err, flights) {
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
    arrival: req.body.arrival
  };
  console.log("this is the destination airpot " + destination.airport);

  console.log("this is the destination time arriival " + destination.arrival);

  console.log("this is the FLIGHT stuff " + flight);
  flight.destinations.push(destination);
  await flight.save();
  res.redirect("/flight/show/" + flight.id);
}

function createTicket(req, res) {
  res.render("flight/ticket");
}

async function giveTicket(req, res) {
  try {
    let flight = await Flight.findById(req.params.id);

    let ticket = {
      seat: req.body.seat,
      price: Math.floor(Math.random() * 1000)
    };

    console.log(ticket);

    flight.tickets.push(ticket);
    await flight.save();
    res.redirect("/flight/show/" + flight.id);
  } catch (error) {
    console.error(error);
  }
}
