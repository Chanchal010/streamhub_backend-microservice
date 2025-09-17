export class BaseError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends BaseError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class AuthenticationError extends BaseError {
    constructor(message: string = 'Authentication failed') {
        super(message, 401);
    }
}
