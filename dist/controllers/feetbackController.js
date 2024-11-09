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
exports.getFeedbacksByDate = exports.getFeedbacksByRating = exports.getFeedbacksByUser = exports.getAllFeedbacks = exports.createFeedback = void 0;
const db_1 = __importDefault(require("../config/db"));
const createFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userId) {
        res.status(400).json({ message: 'userId is required' });
        return;
    }
    const { userId, text, rate } = req.body;
    try {
        const userFeedback = yield db_1.default.query('INSERT INTO feedback (userId, text, rate) VALUES ($1, $2, $3) RETURNING *', [userId, text, rate]);
        res.status(200).json(userFeedback.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
});
exports.createFeedback = createFeedback;
const getAllFeedbacks = (re, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFeedbacks = yield db_1.default.query('SELECT text FROM feedback');
        res.status(200).json(allFeedbacks.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
});
exports.getAllFeedbacks = getAllFeedbacks;
const getFeedbacksByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId)) {
        res.status(400).json({ message: 'Invalid userId' });
        return;
    }
    try {
        const allFeedbacks = yield db_1.default.query('SELECT text FROM feedback WHERE userId = $1', [userId]);
        res.status(200).json(allFeedbacks.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
});
exports.getFeedbacksByUser = getFeedbacksByUser;
const getFeedbacksByRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rating = parseInt(req.params.rating, 10);
    if (isNaN(rating)) {
        res.status(400).json({ message: 'Invalid rating' });
        return;
    }
    try {
        const allFeedbacksByRating = yield db_1.default.query('SELECT text FROM feedback WHERE rate = $1', [rating]);
        res.status(200).json(allFeedbacksByRating.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
});
exports.getFeedbacksByRating = getFeedbacksByRating;
const getFeedbacksByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date(req.params.date);
    try {
        const allFeedbacksByDate = yield db_1.default.query('SELECT text FROM feedback WHERE DATE(create_time) = Date($1)', [date]);
        res.status(200).json(allFeedbacksByDate.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving feedbacks' });
    }
});
exports.getFeedbacksByDate = getFeedbacksByDate;
