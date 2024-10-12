// src/server.ts
import express from 'express';
import { getUsers } from './controllers/userController';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/users', getUsers);  

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
