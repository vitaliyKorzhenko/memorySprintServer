"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Define routes
router.get('/users', userController_1.getUsers); // Route to get all levels
exports.default = router;