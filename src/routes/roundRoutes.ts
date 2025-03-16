/**
 * Round Routes Configuration
 * Handles routes for game rounds and round progress
 */

import {Router} from 'express';
import {
    createRound,
    generateRounds,
    getAllRounds, getCorrectAnswer,
    getRoundById,
    getRoundsByComplexity,
    getRoundsByType,
    getRoundsByUserId,
    updateRound
} from "../controllers/round.controller";

const router = Router();

/**
 * @swagger
 * /api/rounds:
 *   post:
 *     summary: Create new game round
 *     tags: [Rounds]
 */
router.post('/', createRound);

/**
 * @swagger
 * /api/rounds/{id}:
 *   get:
 *     summary: Get round by ID
 *     tags: [Rounds]
 */
router.get('/:id', getRoundById);

/**
 * @swagger
 * /api/rounds/user/{userId}:
 *   get:
 *     summary: Get all rounds for a specific user
 *     tags: [Rounds]
 */
router.get('/user/:userId', getRoundsByUserId);

/**
 * @swagger
 * /api/rounds/{id}:
 *   put:
 *     summary: Update round information
 *     tags: [Rounds]
 */
router.put('/:id', updateRound);

router.get('/', getAllRounds);

router.get("/:type", getRoundsByType);

router.get("/complexity/:complexity", getRoundsByComplexity);

router.get("/generate/:complexity", generateRounds);

router.get('/:id/correct-answer', getCorrectAnswer)

export default router;