"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packageController_1 = require("../controllers/packageController");
const router = (0, express_1.Router)();
// Define routes
router.get('/packages', packageController_1.getPackages); // Route to get all levels
exports.default = router;
