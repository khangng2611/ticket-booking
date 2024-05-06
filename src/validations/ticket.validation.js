import Joi from "joi";
import { APIError } from "../middleware/error.js";

const ticketValidation = {
    // POST /book-ticket
    bookTicket: Joi.object().keys({
        customer: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required()
        }),
        ticket: Joi.object().keys({
            fromStation: Joi.string().required(),
            toStation: Joi.string().required(),
            departureTime: Joi.number().required(),
            quantity: Joi.number().required().min(1),
            price: Joi.number().required().min(1)
        }),
    })
};

export const bookTicketValidation = async (req, res, next) => {
	const payload = {
        customer: {
            name: req.body.customer?.name,
            email: req.body.customer?.email,
            phone: req.body.customer?.phone
        } ,
        ticket: {
            fromStation: req.body.ticket?.fromStation,
            toStation: req.body.ticket?.toStation,
            departureTime: req.body.ticket?.departureTime,
            quantity: req.body.ticket?.quantity,
            price: req.body.ticket?.price
        }
	};

	const { error } = ticketValidation.bookTicket.validate(payload);
	if (error) {
        const err = new APIError({
            message: error.message,
            status: 406
        });
        next(err);
	} else next();
};
