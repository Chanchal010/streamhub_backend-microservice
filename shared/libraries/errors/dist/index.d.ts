export declare class BaseError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode?: number, isOperational?: boolean);
}
export declare class ValidationError extends BaseError {
    constructor(message: string);
}
export declare class AuthenticationError extends BaseError {
    constructor(message?: string);
}
