/**
 * Feedback Routes Configuration
 * Handles all routes related to user feedback
 */

import { Router } from 'express';
import {
    createFeedback,
    getFeedbacksByUser,
    getAllFeedbacks,
    getFeedbacksByRating,
    getFeedbacksByDate,
} from '../controllers/feetbackController';

const router = Router();

/**
 * @swagger
 * /api/feedback:
 *   get:
 *     summary: Get all feedback entries
 *     tags: [Feedback]
 */
router.get('/feedback', getAllFeedbacks);

/**
 * @swagger
 * /api/feedback:
 *   post:
 *     summary: Create new feedback entry
 *     tags: [Feedback]
 */
router.post('/feedback', createFeedback);

router.get('/feedback/user/:userId', getFeedbacksByUser);
router.get('/feedback/rating/:rating', getFeedbacksByRating);
router.get('/feedback/date/:date', getFeedbacksByDate);

export default router;
