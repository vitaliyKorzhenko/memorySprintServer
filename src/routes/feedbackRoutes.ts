import { Router } from 'express';
import {
    createFeedback,
    getFeedbacksByUser,
    getAllFeedbacks,
    getFeedbacksByRating,
    getFeedbacksByDate,
} from '../controllers/feetbackController';

const router = Router();

router.post('/createFeedback', createFeedback);
router.get('/feedback/user/:userId', getFeedbacksByUser);
router.get('/feedback', getAllFeedbacks);
router.get('/feedback/rating/:rating', getFeedbacksByRating);
router.get('/feedback/date/:date', getFeedbacksByDate);



export default router;
