var express = require("express");
var router = express.Router();
var flightCtrl = require("../controller/flightCtrl.js");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

/* GET flights page. */
router.get("/", flightCtrl.viewFlights);

/* GET create flight page. */
router.get("/create", flightCtrl.createFlight);

/* POST the create flight form. */
router.post("/", flightCtrl.create);

/* GET  show flight page. */
router.get("/show/:id", flightCtrl.show);

/* POST from show flight page. */
router.post("/show/:id", flightCtrl.add);

/* GET formm tickt page. */
router.get("/:id/tickets/new", flightCtrl.createTicket);

/* POST formm tickt page. */
router.post("/:id/tickets/new", flightCtrl.giveTicket);

module.exports = router;
