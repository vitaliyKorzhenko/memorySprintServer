/**
 * Rebus Level Routes
 * Handles routes for rebus puzzle type game levels
 */

import { Router } from 'express'

import { createLevel, findById, getLevels } from '../controllers/levelRebusController'

const router = Router()

/**
 * @swagger
 * /api/levelRebus:
 *   get:
 *     summary: Get all rebus puzzle levels
 *     tags: [Rebus]
 */
router.get('/', getLevels)        // Route to get all levels

/**
 * @swagger
 * /api/levelRebus/{id}:
 *   get:
 *     summary: Get rebus puzzle level by ID
 *     tags: [Rebus]
 */
router.get('/:id', findById)        // Route to get all levels

/**
 * @swagger
 * /api/levelRebus:
 *   post:
 *     summary: Create new rebus puzzle level
 *     tags: [Rebus]
 */
router.post('/', createLevel)        // Route to get all levels

export default router;