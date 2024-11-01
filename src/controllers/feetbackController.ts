import { Request, Response } from 'express'; // Импортируем типы
import pool from '../config/db';

export const createFeedback = async (req: Request, res: Response): Promise<void> => {
    const { userId, feedback, rate } = req.body; 
    try {
        const userFeedback = await pool.query('INSERT INTO feedback (text, userId, rate) VALUES ($1, $2, $4) RETURNING *', [userId, feedback, rate]);
        res.status(200).json(userFeedback.rows[0])
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
}

export const deleteFeedback = async (re: Request, res: Response): Promise<void> => {
    try {
        
    }
}

export const getAllFeedbacks = async (re: Request, res: Response): Promise<void> => {
    try {
        
    }
}

export const getFeedbacksByUsers = async (re: Request, res: Response): Promise<void> => {
    try {
        
    }
}

export const getFeedbacksByRating = async (re: Request, res: Response): Promise<void> => {
    try {
        
    }
}

export const getFeedbacksByDate = async (re: Request, res: Response): Promise<void> => {
    try {
        
    }
}