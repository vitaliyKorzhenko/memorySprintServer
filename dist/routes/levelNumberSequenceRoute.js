"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const levelNumberSequenceController_1 = require("../controllers/levelNumberSequenceController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', levelNumberSequenceController_1.getLevels); // Route to get all levels
router.post('/create', levelNumberSequenceController_1.createLevel); // Route to get all levels
//find by id
router.post('/findById', levelNumberSequenceController_1.findById); // Route to get all levels
exports.default = router;
