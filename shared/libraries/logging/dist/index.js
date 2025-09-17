import winston from 'winston';
export class Logger {
    constructor(serviceName) {
        this.serviceName = serviceName;
        this.logger = winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            transports: [
                new winston.transports.Console({
                    format: winston.format.simple()
                })
            ]
        });
    }
    info(message, meta) {
        this.logger.info(message, { service: this.serviceName, ...meta });
    }
    error(message, error) {
        this.logger.error(message, {
            service: this.serviceName,
            error: error?.stack || error
        });
    }
    warn(message, meta) {
        this.logger.warn(message, { service: this.serviceName, ...meta });
    }
}
