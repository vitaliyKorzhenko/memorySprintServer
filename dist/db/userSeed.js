"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
// Массив с пользователями для вставки
const users = [
    { email: 'vitaliykorzenkoua@gmail.com', phone: '+380669947651', age: '30', isActive: true },
    { email: 'vitaliykorzhenkouapr@gmail.com', phone: '+380669947651', age: '30', isActive: false },
    // Добавьте других пользователей
];
// Функция для вставки пользователей в базу данных
const seedUsers = async () => {
    try {
        for (const user of users) {
            const query = `
        INSERT INTO users (email, phone, age, "isActive", created_at)
        VALUES ($1, $2, $3, $4, NOW())
      `;
            const values = [user.email, user.phone, user.age, user.isActive];
            await db_1.default.query(query, values);
            console.log(`User ${user.email} added successfully`);
        }
    }
    catch (error) {
        console.error('Error inserting users:', error);
    }
};
// Экспортируем функцию для использования в других файлах
exports.default = seedUsers;
