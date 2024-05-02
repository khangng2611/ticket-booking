import express from "express"
import * as ticketValidation from "../validations/ticket.validation.js"
import * as controller from '../controllers/ticket.controller.js'

const router = express.Router();
router.post('/book-ticket', ticketValidation.bookTicketValidation, controller.bookTicket);

export default router;
