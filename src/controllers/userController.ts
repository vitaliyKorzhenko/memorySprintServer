// src/controllers/userController.ts
import { Request, Response } from 'express'; // Импортируем типы
import pool from '../config/db';
import User from "../models/user.model";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {

      const users = await User.find({}, null, {lean: true, projection: undefined});

      res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ошибка получения данных' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }

    if (!req.body.nickname) {
        res.status(400).json({ message: 'nickname is required' });
        return;
    }

    if (!req.body.age) {
        res.status(400).json({ message: 'age is required' });
        return;
    }

    const { email, phone, age, nickname } = req.body;

    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { nickname }],
        }, null, {lean: true, projection: undefined});

        if (existingUser) {
            if (existingUser?.email === email) {
                res.status(400).json({ message: 'Email is already taken' });
                return;
            }
            if (existingUser?.nickname === nickname) {
                res.status(400).json({ message: 'Nickname is already taken' });
                return;
            }
        }

        const newUser = new User({
            email,
            nickname,
            phone: phone || '',
            age,
            points: 0,
            isActive: true,
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
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
    const { _id } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { isActive: false },
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(updatedUser)
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
    const { _id } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { isActive: true },
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(updatedUser)
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

    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }

    const { email } = req.body;

    try {

        const user = await User.findOne({email}, null, {lean: true, projection: undefined})

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
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
        const user = await User.findOne({phone}, null, {lean: true, projection: undefined})

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
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
            `INSERT INTO user_history (userId, game_type, status, points, game_details, created_at)
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