"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const levelController_1 = require("../controllers/levelController");
const router = (0, express_1.Router)();
// Define routes
router.get('/levels', levelController_1.getAllLevels); // Route to get all levels
router.get('/levels/:id', levelController_1.getLevelById); // Route to get a level by ID
exports.default = router;
