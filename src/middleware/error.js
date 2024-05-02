import HttpStatus from 'http-status'

export class APIError extends Error {
    constructor({message, status=''}) {
        super(message);
        this.message = message;
        this.status = status || HttpStatus.INTERNAL_SERVER_ERROR;
    }
}

function handler(err, req, res, next) {
    const response = {
        status: err.status,
        message: err.message || HttpStatus[err.status]
    }
    return res.status(err.status).json(response);
}

export function apiError(err, req, res, next) {
    if (!err instanceof APIError) {
        const apiError = new APIError({
            message: err.message || HttpStatus[err.status],
            status: err.status
        })
        return handler(apiError, req, res, next);
    }
    return handler(err, req, res, next);
}

export function notFound(req, res, next) {
    const notFoundError = new APIError({
        message: 'Not found',
        status: HttpStatus.NOT_FOUND
    });
    return handler(notFoundError, req, res, next);
}