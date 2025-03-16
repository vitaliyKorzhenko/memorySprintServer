/**
 * 3x3 Number Grid Level Routes
 * Handles routes for 3x3 number grid type game levels
 */

import { Router } from "express";

import {
    createLevel,
    findById,
    getLevels,
} from "../controllers/numberGrid33Controller";

const router = Router();

/**
 * @swagger
 * /api/numberGrid33:
 *   get:
 *     summary: Get all 3x3 number grid levels
 *     tags: [Number Grid]
 */
router.get("/", getLevels); // Route to get all levels

/**
 * @swagger
 * /api/numberGrid33/{id}:
 *   get:
 *     summary: Get 3x3 number grid level by ID
 *     tags: [Number Grid]
 */
router.get("/:id", findById); // Route to get all levels

/**
 * @swagger
 * /api/numberGrid33:
 *   post:
 *     summary: Create new 3x3 number grid level
 *     tags: [Number Grid]
 */
router.post("/", createLevel); // Route to get all levels

export default router;
