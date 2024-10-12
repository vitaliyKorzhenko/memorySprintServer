import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const router = Router();

// Define routes
router.get('/users', getUsers);        // Route to get all levels

export default router;
