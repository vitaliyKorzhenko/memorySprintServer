/**
 * Shape Selection Level Routes
 * Handles routes for shape selection type game levels
 */

import { Router } from "express";

import {
    createLevel,
    findById,
    getLevels,
} from "../controllers/levelShapeSelection";

const router = Router();

/**
 * @swagger
 * /api/levelShapeSelection:
 *   get:
 *     summary: Get all shape selection levels
 *     tags: [Shape Selection]
 */
router.get("/", getLevels); // Route to get all levels

/**
 * @swagger
 * /api/levelShapeSelection/{id}:
 *   get:
 *     summary: Get shape selection level by ID
 *     tags: [Shape Selection]
 */
router.get("/:id", findById); // Route to get all levels

/**
 * @swagger
 * /api/levelShapeSelection:
 *   post:
 *     summary: Create new shape selection level
 *     tags: [Shape Selection]
 */
router.post("/", createLevel); // Route to get all levels

export default router;
