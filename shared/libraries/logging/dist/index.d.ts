export declare class Logger {
    private serviceName;
    private logger;
    constructor(serviceName: string);
    info(message: string, meta?: any): void;
    error(message: string, error?: Error | any): void;
    warn(message: string, meta?: any): void;
}
