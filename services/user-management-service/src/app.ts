import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { Logger } from '@streamhub/logging';

class App {
    public app: express.Application;
    private logger: Logger;

    constructor() {
        this.app = express();
        this.logger = new Logger('UserService');

        this.initializeMiddlewares();
        this.initializeRoutes();
        this.connectToDatabase();
    }

    private initializeMiddlewares(): void {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes(): void {
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'healthy',
                service: 'user-management-service',
                timestamp: new Date().toISOString()
            });
        });
    }

    private async connectToDatabase(): Promise<void> {
        try {
            await mongoose.connect('mongodb://localhost:27017/superbuzz_users');
            this.logger.info('Connected to MongoDB');
        } catch (error) {
            this.logger.error('Database connection failed:', error);
        }
    }

    public listen(): void {
        const port = 3001;
        this.app.listen(port, () => {
            this.logger.info(`User Service running on port ${port}`);
        });
    }
}

const app = new App();
app.listen();
