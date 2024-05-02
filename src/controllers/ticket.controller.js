import Ticket from "../models/ticket.model.js";

export async function bookTicket(req, res, next) {
    try {
        const requestBody = req.body;
        const ticket = Ticket.add({...requestBody.ticket, ...requestBody.customer});

        return res.status(200).json({
            "message": "success",
            "ticket": ticket,
        });
    } catch (error) {
        next(error);
    }
}