/**
 * Number Sequence Level Routes
 * Handles routes for number sequence type game levels
 */

import { Router } from 'express'

import { createLevel, findById, getLevels } from '../controllers/levelNumberSequenceController'

const router = Router()

/**
 * @swagger
 * /api/levelNumberSequence:
 *   get:
 *     summary: Get all number sequence levels
 *     tags: [Number Sequence]
 */
router.get('/', getLevels)        // Route to get all levels

/**
 * @swagger
 * /api/levelNumberSequence/{id}:
 *   get:
 *     summary: Get number sequence level by ID
 *     tags: [Number Sequence]
 */
router.get('/:id', findById)        // Route to get all levels

/**
 * @swagger
 * /api/levelNumberSequence:
 *   post:
 *     summary: Create new number sequence level
 *     tags: [Number Sequence]
 */
router.post('/', createLevel)        // Route to get all levels

export default router;