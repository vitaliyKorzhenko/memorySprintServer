"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRound = exports.getCorrectAnswer = exports.getRoundById = exports.generateRounds = exports.getRoundsByComplexity = exports.getRoundsByType = exports.getAllRounds = void 0;
const round_model_1 = __importDefault(require("../models/round.model"));
//Получить все раунды
const getAllRounds = async (req, res) => {
    try {
        const rounds = await round_model_1.default.find();
        res.status(200).json(rounds);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
};
exports.getAllRounds = getAllRounds;
// Получить раунды по типу
const getRoundsByType = async (req, res) => {
    try {
        const { type } = req.params;
        const rounds = await round_model_1.default.find({ type });
        res.status(200).json(rounds);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getRoundsByType = getRoundsByType;
//Получить раунды по сложности
const getRoundsByComplexity = async (req, res) => {
    try {
        const { complexity } = req.params;
        const rounds = await round_model_1.default.find({ complexity });
        res.status(200).json(rounds);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getRoundsByComplexity = getRoundsByComplexity;
// Генерация раундов с разными типами
const generateRounds = async (req, res) => {
    try {
        const { complexity } = req.params;
        const rounds = await round_model_1.default.aggregate([
            { $match: { complexity } },
            { $sample: { size: 15 } }
        ]);
        res.status(200).json(rounds.slice(0, 15));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.generateRounds = generateRounds;
// Получить раунд по ID
const getRoundById = async (req, res) => {
    try {
        const { id } = req.params;
        const round = await round_model_1.default.findOne({ id: Number(id) });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return;
        }
        res.status(200).json(round);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getRoundById = getRoundById;
// Получить правильный ответ для раунда по ID
const getCorrectAnswer = async (req, res) => {
    try {
        const { id } = req.params;
        const round = await round_model_1.default.findOne({ id: Number(id) });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return;
        }
        res.status(200).json({ correctAnswer: round.answer });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getCorrectAnswer = getCorrectAnswer;
const createRound = async (req, res) => {
    try {
        const { id, type, sequence, answer, point, headerEn, headerUa, options, complexity, mode, variants } = req.body;
        const existingRound = await round_model_1.default.findOne({ id });
        if (existingRound) {
            res.status(400).json({ message: 'Round with this ID already exists' });
            return;
        }
        const newRound = new round_model_1.default({
            id,
            type,
            sequence,
            answer,
            point,
            headerEn,
            headerUa,
            options,
            complexity,
            mode,
            variants
        });
        await newRound.save();
        res.status(201).json(newRound);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createRound = createRound;
