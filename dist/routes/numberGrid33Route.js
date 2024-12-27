"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const numberGrid22Controller_1 = require("../controllers/numberGrid22Controller");
const router = (0, express_1.Router)();
// Define routes
router.get("/", numberGrid22Controller_1.getLevels); // Route to get all levels
router.post("/create", numberGrid22Controller_1.createLevel); // Route to get all levels
//find by id
router.post("/findById", numberGrid22Controller_1.findById); // Route to get all levels
exports.default = router;
