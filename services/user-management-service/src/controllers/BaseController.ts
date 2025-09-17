import { Request, Response, NextFunction } from 'express';
import { Logger } from '@streamhub/logging';
import { BaseError } from '@streamhub/errors';

export abstract class BaseController {
    protected logger: Logger;

    constructor(serviceName: string) {
        this.logger = new Logger(serviceName);
    }

    protected handleAsync = (fn: Function) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await fn(req, res, next);
            } catch (error) {
                this.logger.error('Controller error:', error);
                next(error);
            }
        };

    protected sendSuccess(res: Response, data: any, message: string = 'Success') {
        res.json({
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        });
    }
}
