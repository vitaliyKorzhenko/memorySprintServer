// apiKeyMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const API_KEY = 'Vx0m1HXUYfkkfd0lds;0404'; // Задайте свой API-ключ

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey = req.header('x-api-key'); // Получите API-ключ из заголовка

    if (!apiKey || apiKey !== API_KEY) {
        res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    } else {
        next(); // Если ключ корректный, передаем управление следующему middleware или маршруту
    }
};

export default apiKeyMiddleware;
