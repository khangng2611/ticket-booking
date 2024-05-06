import mongoose from 'mongoose';
// import moment from 'moment-timezone';

const ticket = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/
  },
  phone: {
    type: String,
    required: true
  },
  fromStation: {
    type: String,
    required: true
  },
  toStation: {
    type: String,
    required: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
},
  { timestamps: true }
);

ticket.statics = {
  add(ticket) {
      const ticketObj = new Ticket(ticket);
      ticketObj.save();
      return ticketObj;
  },
};

const Ticket = mongoose.model('Ticket', ticket);

export default Ticket;
