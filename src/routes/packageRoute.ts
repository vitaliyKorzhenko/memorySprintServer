import { Router } from 'express';
import {
    getPackages
} from '../controllers/packageController';

const router = Router();

// Define routes
router.get('/packages', getPackages); // Route to get all levels

 


export default router;
