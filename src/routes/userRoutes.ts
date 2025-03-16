/**
 * User Routes Configuration
 * Handles all routes related to user management and user progress
 */

import { Router } from 'express';
import {
    createUser,
    disableUser,
    enableUser,
    findUserByEmail,
    findUserByPhone,
    getUsers,
    addCompleteExercise,
    addIncompleteExercise,
    removeIncompleteExercise,
    getCompletedExercises,
    getIncompleteExerciseById,
    getIncompleteExercises
} from '../controllers/userController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /api/createUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 */
router.post('/createUser', createUser);

/**
 * @swagger
 * /api/disableUser:
 *   post:
 *     summary: Disable user account
 *     tags: [Users]
 */
router.post('/disableUser', disableUser);

/**
 * @swagger
 * /api/enableUser:
 *   post:
 *     summary: Enable user account
 *     tags: [Users]
 */
router.post('/enableUser', enableUser);

/**
 * @swagger
 * /api/findUserByEmail:
 *   post:
 *     summary: Find user by email address
 *     tags: [Users]
 */
router.post('/findUserByEmail', findUserByEmail);

/**
 * @swagger
 * /api/findUserByPhone:
 *   post:
 *     summary: Find user by phone number
 *     tags: [Users]
 */
router.post('/findUserByPhone', findUserByPhone);

/**
 * Exercise Progress Routes
 */

/**
 * @swagger
 * /api/user/{id}/addCompleteExercise/{roundId}:
 *   post:
 *     summary: Add completed exercise to user's progress
 *     tags: [User Progress]
 */
router.post('/user/:id/addCompleteExercise/:roundId', addCompleteExercise);

/**
 * @swagger
 * /api/user/{id}/addIncompleteExercise:
 *   post:
 *     summary: Add incomplete exercise to user's progress
 *     tags: [User Progress]
 */
router.post('/user/:id/addIncompleteExercise', addIncompleteExercise);

/**
 * @swagger
 * /api/user/{id}/removeIncompleteExercise/{exerciseId}:
 *   delete:
 *     summary: Remove incomplete exercise from user's progress
 *     tags: [User Progress]
 */
router.delete('/user/:id/removeIncompleteExercise/:exerciseId', removeIncompleteExercise);

/**
 * @swagger
 * /api/user/{id}/completed:
 *   get:
 *     summary: Get user's completed exercises
 *     tags: [User Progress]
 */
router.get('/user/:id/completed', getCompletedExercises);

/**
 * @swagger
 * /api/user/{id}/incomplete/{exerciseId}:
 *   get:
 *     summary: Get specific incomplete exercise
 *     tags: [User Progress]
 */
router.get('/user/:id/incomplete/:exerciseId', getIncompleteExerciseById);

/**
 * @swagger
 * /api/user/{id}/incomplete:
 *   get:
 *     summary: Get all incomplete exercises
 *     tags: [User Progress]
 */
router.get('/user/:id/incomplete', getIncompleteExercises);

export default router;
