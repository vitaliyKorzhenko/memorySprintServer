"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const levelController_1 = require("../controllers/levelController");
const router = (0, express_1.Router)();
// Define routes
router.get('/levels', levelController_1.getAllLevels); // Route to get all levels
router.get('/levels/:id', levelController_1.getLevelById); // Route to get a level by ID
//add all new routes here
router.post('/allLevelProgress', levelController_1.findAllLevelProgresses); // Route to get all level progresses
//create level progress
router.post('/createLevelProgress', levelController_1.createLevelProgress); // Route to create level progress
//find user info
router.post('/findProgressByUserId', levelController_1.findProgressByUserId); // Route to find user info
//find user info
router.post('/findInfo', levelController_1.findUserInfo); // Route to find user info
exports.default = router;
