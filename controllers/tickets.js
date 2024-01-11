const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  new: newTicket,
};

async function create(req, res) {
  try {
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flight._id}`);
}

async function newTicket(req, res) {
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.flightId });
}
