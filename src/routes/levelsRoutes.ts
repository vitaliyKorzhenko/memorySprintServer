import { Router } from 'express';
import { getAllLevels, getLevelById } from '../controllers/levelController';

const router = Router();

// Define routes
router.get('/levels', getAllLevels);        // Route to get all levels
router.get('/levels/:id', getLevelById);    // Route to get a level by ID

export default router;
