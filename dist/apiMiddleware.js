"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_KEY = 'Vx0m1HXUYfkkfd0lds;0404'; // Задайте свой API-ключ
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.header('x-api-key'); // Получите API-ключ из заголовка
    if (!apiKey || apiKey !== API_KEY) {
        res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
    else {
        next(); // Если ключ корректный, передаем управление следующему middleware или маршруту
    }
};
exports.default = apiKeyMiddleware;
