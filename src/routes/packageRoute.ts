/**
 * Package Routes Configuration
 * Handles routes for level packages
 */

import { Router } from 'express';
import {
    createPackage,
    getPackages
} from '../controllers/packageController';

const router = Router();

/**
 * @swagger
 * /api/packages:
 *   get:
 *     summary: Get all level packages
 *     tags: [Packages]
 */
router.get('/', getPackages);

/**
 * @swagger
 * /api/packages:
 *   post:
 *     summary: Create new level package
 *     tags: [Packages]
 */
router.post('/', createPackage);

export default router;
