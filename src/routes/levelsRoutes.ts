/**
 * Level Routes Configuration
 * Handles all routes related to game levels and level progress
 */

import { Router } from 'express';
import { findAllLevelProgresses, createLevelProgress, getAllLevels, getLevelById, findProgressByUserId, findUserInfo, findRandomLevel } from '../controllers/levelController';

const router = Router();

/**
 * @swagger
 * /api/levels:
 *   get:
 *     summary: Get all available levels
 *     tags: [Levels]
 */
router.get('/levels', getAllLevels);        // Route to get all levels

/**
 * @swagger
 * /api/levels/{id}:
 *   get:
 *     summary: Get level by ID
 *     tags: [Levels]
 */
router.get('/levels/:id', getLevelById);    // Route to get a level by ID

//add all new routes here
/**
 * @swagger
 * /api/allLevelProgress:
 *   post:
 *     summary: Get progress for all levels
 *     tags: [Level Progress]
 */
router.post('/allLevelProgress', findAllLevelProgresses);        // Route to get all level progresses

/**
 * @swagger
 * /api/createLevelProgress:
 *   post:
 *     summary: Create new level progress entry
 *     tags: [Level Progress]
 */
router.post('/createLevelProgress', createLevelProgress);        // Route to create level progress

/**
 * @swagger
 * /api/findProgressByUserId:
 *   post:
 *     summary: Find level progress by user ID
 *     tags: [Level Progress]
 */
router.post('/findProgressByUserId', findProgressByUserId);        // Route to find user info

/**
 * @swagger
 * /api/findInfo:
 *   post:
 *     summary: Get user information
 *     tags: [Users]
 */
router.post('/findInfo', findUserInfo);        // Route to find user info

// findRandomLevel
/**
 * @swagger
 * /api/findRandomLevel:
 *   post:
 *     summary: Get a random level
 *     tags: [Levels]
 */
router.post('/findRandomLevel', findRandomLevel);        // Route to find random level

export default router;
