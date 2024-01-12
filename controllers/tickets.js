const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  new: newTicket,
};

async function create(req, res) {
  const flightId = req.params.id;
  req.body.flight = flightId;
  try {
    const ticket = await Ticket.create(req.body);
    await ticket.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${flightId}`);
}

async function newTicket(req, res) {
  console.log(req.params.id)
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.id });
}
