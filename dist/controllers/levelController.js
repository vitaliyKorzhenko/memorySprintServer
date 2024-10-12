"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLevelById = exports.getAllLevels = void 0;
const db_1 = __importDefault(require("../config/db"));
// Get all levels
const getAllLevels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM levels'); // Query to select all levels
        res.status(200).json(result.rows); // Send the retrieved levels as JSON
    }
    catch (error) {
        console.error('Error retrieving levels:', error); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Send a 500 status with an error message
    }
});
exports.getAllLevels = getAllLevels;
// Get a level by ID
const getLevelById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Extract the ID from the request parameters
    try {
        const result = yield db_1.default.query('SELECT * FROM levels WHERE id = $1', [id]); // Query to select level by ID
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]); // If level found, send it as JSON
        }
        else {
            res.status(404).json({ message: 'Level not found' }); // If not found, send a 404 status with a message
        }
    }
    catch (error) {
        console.error('Error retrieving level:', error); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Send a 500 status with an error message
    }
});
exports.getLevelById = getLevelById;
