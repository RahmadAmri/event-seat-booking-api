const express = require("express");
const Controller = require("./controllers/controller");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Seat Reservation API");
});

app.post("/api/bookings/reserve", Controller.reserveSeat);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Seat Reservation API listening on port ${port}`);
});

module.exports = app;
