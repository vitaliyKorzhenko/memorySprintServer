/**
 * API Key Authentication Middleware
 * Validates requests by checking for a valid API key in the x-api-key header
 */

import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get API key from environment variables or use default for development
const API_KEY = process.env.API_KEY || 'Vx0m1HXUYfkkfd0lds;0404';

/**
 * Middleware function to validate API key
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey = req.header('x-api-key');

    if (!apiKey || apiKey !== API_KEY) {
        res.status(403).json({ 
            error: 'Forbidden',
            message: 'Invalid or missing API key' 
        });
        return;
    }

    next();
};

export default apiKeyMiddleware;
