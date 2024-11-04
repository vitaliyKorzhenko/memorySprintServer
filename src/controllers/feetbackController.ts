import { Request, Response } from 'express'; // Импортируем типы
import pool from '../config/db';
import { isDate } from 'util/types';

export const createFeedback = async (
    req: Request,
    res: Response
): Promise<void> => {
    if (!req.body.userId) {
        res.status(400).json({ message: 'userId is required' });
        return;
    }
    //add validation to all fields
    const { userId, text, rate } = req.body;
    try {
        const userFeedback = await pool.query(
            'INSERT INTO feedback (userId, text, rate) VALUES ($1, $2, $3) RETURNING *',
            [userId, text, rate]
        );
        res.status(200).json(userFeedback.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
};

export const getAllFeedbacks = async (
    re: Request,
    res: Response
): Promise<void> => {
    //get all feedbacks with ratings and date, ask if I should return a user too? (Join)
    try {
        const allFeedbacks = await pool.query('SELECT text FROM feedback');
        res.status(200).json(allFeedbacks.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
};

export const getFeedbacksByUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
        res.status(400).json({ message: 'Invalid userId' });
        return;
    }

    //should I return also users and ratings?

    try {
        const allFeedbacks = await pool.query(
            'SELECT text FROM feedback WHERE userId = $1',
            [userId]
        );
        res.status(200).json(allFeedbacks.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
};

export const getFeedbacksByRating = async (
    req: Request,
    res: Response
): Promise<void> => {
    const rating = parseInt(req.params.rating, 10);

    if (isNaN(rating)) {
        res.status(400).json({ message: 'Invalid rating' });
        return;
    }

    //one rating or range of ratings?

    try {
        const allFeedbacksByRating = await pool.query(
            'SELECT text FROM feedback WHERE rate = $1',
            [rating]
        );
        res.status(200).json(allFeedbacksByRating.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
};

export const getFeedbacksByDate = async (
    req: Request,
    res: Response
): Promise<void> => {
    const date = new Date(req.params.date);

    if (isDate(date)) {
        // res.status(400).json({ message: 'Invalid date' });
        // return;
        console.log(date);
    }

    //range of dates?
    try {
        const allFeedbacksByDate = await pool.query(
            'SELECT text FROM feedback WHERE DATE(create_time) = Date($1)',
            [date]
        );
        res.status(200).json(allFeedbacksByDate.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
};