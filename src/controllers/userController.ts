// src/controllers/userController.ts
import { Request, Response } from 'express'; // Импортируем типы
import pool from '../config/db';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM users'); 
    res.status(200).json(result.rows); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ошибка получения данных' });
  }
};
