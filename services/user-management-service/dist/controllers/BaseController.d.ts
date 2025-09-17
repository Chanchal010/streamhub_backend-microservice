import { Request, Response, NextFunction } from 'express';
import { Logger } from '@streamhub/logging';
export declare abstract class BaseController {
    protected logger: Logger;
    constructor(serviceName: string);
    protected handleAsync: (fn: Function) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
    protected sendSuccess(res: Response, data: any, message?: string): void;
}
