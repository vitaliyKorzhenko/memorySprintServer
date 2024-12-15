"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const levelRebusController_1 = require("../controllers/levelRebusController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', levelRebusController_1.getLevels); // Route to get all levels
router.post('/create', levelRebusController_1.createLevel); // Route to get all levels
//find by id
router.post('/findById', levelRebusController_1.findById); // Route to get all levels
exports.default = router;
