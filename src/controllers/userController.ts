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
    // Check email
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    
    // Check nickname
    if (!req.body.nickname) {
        res.status(400).json({ message: 'nickname is required' });
        return;
    }

    // Check age
    if (!req.body.age) {
        res.status(400).json({ message: 'age is required' });
        return;
    }

    const { email, phone, age, nickname } = req.body;
    const userData = {
        email: email,
        nickname: nickname,
        age: age,
        points: 0,
        isActive: true,
        phone: phone ?? '',
    };
    let isActive = true;

    try {
        // Check if email or nickname already exists
        const existingUserCheck = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR nickname = $2',
            [email, nickname]
        );
        if (existingUserCheck.rows.length > 0) {
            const existingUser = existingUserCheck.rows[0];
            if (existingUser.email === email) {
                res.status(400).json({ message: 'Email is already taken' });
                return;
            }
            if (existingUser.nickname === nickname) {
                res.status(400).json({ message: 'Nickname is already taken' });
                return;
            }
        }

        // Insert new user
        const result = await pool.query(
            `INSERT INTO users (email, nickname, phone, age, "isActive", created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
            [userData.email, userData.nickname, userData.phone, userData.age, isActive]
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


//  users and user_history 
// add to user history by user id 

interface UserHistoryModel {
    userId: number;
    gameType: string;
    status: string;
    points: number;
    gameDetails: JSON;
    minusLifes: number;
}

export const addUserHistory = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId, gameType, status, points, gameDetails, minusLifes } = req.body;
    const userHistoryData: UserHistoryModel = {
        userId: userId,
        gameType: gameType,
        status: status,
        points: points,
        gameDetails: gameDetails,
        minusLifes: minusLifes
    };
    try {
        if (!userId) {
            res.status(400).json({ message: 'userId is required' });
            return;
        }
        const result = await pool.query(
            `INSERT INTO user_history (user_id, game_type, status, points, game_details, created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
            [
                userHistoryData.userId,
                userHistoryData.gameType,
                userHistoryData.status,
                userHistoryData.points,
                userHistoryData.gameDetails,
            ]
        );

        //add points to user
        const user = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [userId]
        );
        const userPoints = user.rows[0].points + points;

        //update user lifes
        const userLifes = user.rows[0].lifes > 0 &&  user.rows[0].lifes > minusLifes ?  user.rows[0].lifes - minusLifes : 0;

       //update user points and lifes
        await pool.query(
            `UPDATE users SET points = $1, lifes = $2 WHERE id = $3`,
            [userPoints, userLifes, userId]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'add user history error' });
    }
};