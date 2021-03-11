var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
//
// /* GET flights page. */
// router.get("/index", flightCtrl.viewFlights);
//
// /* GET create flight page. */
// router.get("/create", flightCtrl.createFlight);
//
// /* POST the create flight form. */
// router.post("/", flightCtrl.create);
//
// /* GET  show flight page. */
// router.get("/show/:id", flightCtrl.show);
//
// /* POST from show flight page. */
// router.post("/show/:id", flightCtrl.add);

module.exports = router;
