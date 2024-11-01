import { Router } from 'express';
import { createFeedback } from '../controllers/feetbackController';

const router = Router();

router.post('/createFeedback', createFeedback);

export default router;
