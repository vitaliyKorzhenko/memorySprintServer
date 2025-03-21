"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const round_controller_1 = require("../controllers/round.controller");
const router = (0, express_1.Router)();
router.get('/', round_controller_1.getAllRounds);
router.get("/:type", round_controller_1.getRoundsByType);
router.get("/complexity/:complexity", round_controller_1.getRoundsByComplexity);
router.get("/generate/:complexity", round_controller_1.generateRounds);
router.get('/get/:id', round_controller_1.getRoundById);
router.get('/:id/correct-answer', round_controller_1.getCorrectAnswer);
router.post('/create', round_controller_1.createRound);
exports.default = router;
