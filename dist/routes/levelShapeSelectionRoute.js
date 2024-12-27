"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const levelShapeSelection_1 = require("../controllers/levelShapeSelection");
const router = (0, express_1.Router)();
// Define routes
router.get("/", levelShapeSelection_1.getLevels); // Route to get all levels
router.post("/create", levelShapeSelection_1.createLevel); // Route to get all levels
//find by id
router.post("/findById", levelShapeSelection_1.findById); // Route to get all levels
exports.default = router;
