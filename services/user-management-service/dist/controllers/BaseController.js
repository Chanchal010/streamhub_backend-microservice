"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const logging_1 = require("@streamhub/logging");
class BaseController {
    constructor(serviceName) {
        this.handleAsync = (fn) => async (req, res, next) => {
            try {
                await fn(req, res, next);
            }
            catch (error) {
                this.logger.error('Controller error:', error);
                next(error);
            }
        };
        this.logger = new logging_1.Logger(serviceName);
    }
    sendSuccess(res, data, message = 'Success') {
        res.json({
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        });
    }
}
exports.BaseController = BaseController;
