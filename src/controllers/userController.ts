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




//create user use email, phone, age, "isActive",
export const createUser = async (req: Request, res: Response): Promise<void> => {
  if (!req.body.email || !req.body.phone || !req.body.age) {
    res.status(400).json({ message: 'email, phone age is required' });
    return;
  }
  const { email, phone, age } = req.body; 
  let isActive = true
  try {
    const result = await pool.query(
      `INSERT INTO users (email, phone, age, "isActive", created_at)
      VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
      [email, phone, age, isActive]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'create error' });
  }
};

//disable user by id

export const disableUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.body;
    try {
        const result = await pool.query(
            `UPDATE users SET "isActive" = false WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'disable error' });
    }
};

//enable user by id

export const enableUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.body;
    try {
        const result = await pool.query(
            `UPDATE users SET "isActive" = true WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'enable error' });
    }
};

//get user info by email

export const findUserByEmail = async (
    req: Request,
    res: Response
): Promise<void> => {
    console.log(' req.body', req.body);
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    const { email } = req.body;
    try {
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by email error' });
    }
};

//get user info by phone

export const findUserByPhone = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { phone } = req.body;
    try {
        const result = await pool.query(
            `SELECT * FROM users WHERE phone = $1`,
            [phone]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by phone error' });
    }
};