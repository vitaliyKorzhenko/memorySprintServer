import { Router } from 'express';
import {
    createFeedback,
    getFeedbacksByUsers,
} from '../controllers/feetbackController';

const router = Router();

router.post('/createFeedback', createFeedback);
router.get('/feedback/user/:userId', getFeedbacksByUsers);


export default router;
