"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Управление пользователями
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Получить всех пользователей
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Список пользователей
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Ошибка сервера
 */
router.get('/users', userController_1.getUsers); // Route to get all levels
//create user
router.post('/createUser', userController_1.createUser);
//disable user by id
router.post('/disableUser', userController_1.disableUser);
//enable user by id
router.post('/enableUser', userController_1.enableUser);
//findUserByEmail
router.post('/findUserByEmail', userController_1.findUserByEmail);
//findUserByPhone
router.post('/findUserByPhone', userController_1.findUserByPhone);
//addCompletedTasks
router.post('/user/:id/addCompleteExercise/:roundId', userController_1.addCompleteExercise);
//addIncompleteTasks
router.post('/user/:id/addIncompleteExercise/', userController_1.addIncompleteExercise);
//removeFromIncompleteTasks
router.delete('/user/:id/removeIncompleteExercise/:exerciseId', userController_1.removeIncompleteExercise);
//getCompletedTasks
router.get("/user/:id/completed", userController_1.getCompletedExercises);
//get incomplete tasks by id
router.get("/user/:id/incomplete/:exerciseId", userController_1.getIncompleteExerciseById);
//get incomplete tasks
router.get("/user/:id/incomplete", userController_1.getIncompleteExercises);
exports.default = router;
