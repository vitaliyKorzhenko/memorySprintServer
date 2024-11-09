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
exports.findRandomLevelNumberSequence = exports.findUserInfo = exports.findProgressByUserId = exports.findUsersByLevelId = exports.deleteLevelProgress = exports.updateLevelProgress = exports.createLevelProgress = exports.findLevelProgressById = exports.findAllLevelProgresses = exports.getLevelById = exports.getAllLevels = void 0;
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
//progress section 
// Get all level progresses
const findAllLevelProgresses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM level_progress');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error retrieving level progress:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findAllLevelProgresses = findAllLevelProgresses;
// Get level progress by ID
const findLevelProgressById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const result = yield db_1.default.query('SELECT * FROM level_progress WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'Level progress not found' });
        }
    }
    catch (error) {
        console.error('Error retrieving level progress:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findLevelProgressById = findLevelProgressById;
// Create new level progress
const createLevelProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.warn('CREATE LEVEL PROGRESS', req.body);
    const { user_id, level_id, status, attempts, point } = req.body;
    try {
        const result = yield db_1.default.query('INSERT INTO level_progress (user_id, level_id, status, attempts, point,  created_at) VALUES ($1, $2, $3, $4, $5, now()) RETURNING *', [user_id, level_id, status, attempts, point]);
        yield db_1.default.query('UPDATE users SET points = points + $1 WHERE id = $2', [point, user_id]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error creating level progress:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createLevelProgress = createLevelProgress;
// Update level progress by ID
const updateLevelProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const { status, attempts, point, isActive } = req.body;
    try {
        const previousResult = yield db_1.default.query('SELECT point, user_id FROM level_progress WHERE id = $1', [id]);
        if (previousResult.rows.length === 0) {
            return res.status(404).json({ message: 'Level progress not found' });
        }
        const previousPoint = previousResult.rows[0].point;
        const userId = previousResult.rows[0].user_id;
        const result = yield db_1.default.query('UPDATE level_progress SET status = $1, attempts = $2, point = $3, isActive = $4 WHERE id = $5 RETURNING *', [status, attempts, point, isActive, id]);
        yield db_1.default.query('UPDATE users SET points = points - $1 + $2 WHERE id = $3', [previousPoint, point, userId]);
        res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error updating level progress:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateLevelProgress = updateLevelProgress;
// Delete level progress by ID
const deleteLevelProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const previousResult = yield db_1.default.query('SELECT point, user_id FROM level_progress WHERE id = $1', [id]);
        if (previousResult.rows.length === 0) {
            return res.status(404).json({ message: 'Level progress not found' });
        }
        const previousPoint = previousResult.rows[0].point;
        const userId = previousResult.rows[0].user_id;
        const result = yield db_1.default.query('DELETE FROM level_progress WHERE id = $1 RETURNING *', [id]);
        yield db_1.default.query('UPDATE users SET points = points - $1 WHERE id = $2', [previousPoint, userId]);
        res.status(200).json({ message: 'Level progress deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting level progress:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteLevelProgress = deleteLevelProgress;
// Get all users who attempted a specific level
const findUsersByLevelId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { level_id } = req.body;
    try {
        const result = yield db_1.default.query('SELECT * FROM level_progress WHERE level_id = $1', [level_id]);
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error retrieving users by level ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findUsersByLevelId = findUsersByLevelId;
// Get progress for a specific user
const findProgressByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, ageType } = req.body;
    try {
        const result = yield db_1.default.query('SELECT * FROM level_progress lp INNER JOIN levels l ON lp.level_id = l.id WHERE lp.user_id = $1 AND l.ageType = $2', [user_id, ageType]);
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error retrieving progress by user ID and ageType:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findProgressByUserId = findProgressByUserId;
// Get user information and progress history by email and ageType
//find user info
const findUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, ageType } = req.body;
    try {
        const result = yield db_1.default.query(`SELECT u.id, u.name, u.email
      FROM users u
      WHERE u.email = $1`, [email]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const progress = yield db_1.default.query(`SELECT lp.*, l.title
        FROM level_progress lp
        INNER JOIN levels l ON lp.level_id = l.id
        WHERE lp.user_id = $1 AND l.ageType = $2`, [user.id, ageType]);
            res.status(200).json({ user, progress: progress.rows });
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        console.error('Error retrieving user info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findUserInfo = findUserInfo;
//find random level where type = number_sequence and not in progress 
const findRandomLevelNumberSequence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, ageType } = req.body;
    try {
        const result = yield db_1.default.query(`SELECT l.*
      FROM levels l
      LEFT JOIN level_progress lp ON l.id = lp.level_id AND lp.user_id = $1
      WHERE l.ageType = $2 AND l.type = 'number_sequence' AND lp.id IS NULL
      ORDER BY RANDOM()
      LIMIT 1`, [user_id, ageType]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'No levels found' });
        }
    }
    catch (error) {
        console.error('Error retrieving random level:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.findRandomLevelNumberSequence = findRandomLevelNumberSequence;
