import winston from 'winston';

export class Logger {
    private logger: winston.Logger;

    constructor(private serviceName: string) {
        this.logger = winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.simple()
                })
            ]
        });
    }

    info(message: string, meta?: any) {
        this.logger.info(message, { service: this.serviceName, ...meta });
    }

    error(message: string, error?: Error | any) {
        this.logger.error(message, {
            service: this.serviceName,
            error: error?.stack || error
        });
    }

    warn(message: string, meta?: any) {
        this.logger.warn(message, { service: this.serviceName, ...meta });
    }
}
