"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Define routes
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
exports.default = router;
