"use strict";
//work with table level_number_sequence
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
exports.findById = exports.createLevel = exports.getLevels = void 0;
const db_1 = __importDefault(require("../config/db"));
//getl all levels
const tableRebus = 'level_rebus';
const getLevels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //use table name
    try {
        const allLevels = yield db_1.default.query(`SELECT * FROM ${tableRebus}`);
        res.status(200).json(allLevels.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving levels' });
    }
});
exports.getLevels = getLevels;
//create new level
const createLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //rebus json
    const { rebus, answer, options } = req.body;
    //create new level using table name
    try {
        if (!rebus) {
            res.status(400).json({ message: 'rebus is required' });
            return;
        }
        if (!answer) {
            res.status(400).json({ message: 'answer is required' });
            return;
        }
        if (!options) {
            res.status(400).json({ message: 'options is required' });
            return;
        }
        //rebis is json 
        let currentRebus = rebus;
        //transfrom array options to string with separator ','
        let currentOptions = options.join(',');
        //points
        let points = req.body.points ? req.body.points : 5;
        //headers
        let header_ua = req.body.headerUA ? req.body.headerUA : '';
        let header_en = req.body.headerEN ? req.body.headerEN : '';
        let header_sp = req.body.headerSP ? req.body.header : '';
        //hints
        let hint_ua = req.body.hintUA ? req.body.hintUA : '';
        let hint_en = req.body.hintEN ? req.body.hintEN : '';
        let hint_sp = req.body.hintSP ? req.body.hintSP : '';
        //complexity
        let complexity = req.body.complexity ? req.body.complexity : 'medium';
        let newLevel = yield db_1.default.query(`INSERT INTO ${tableRebus} (rebus, answer, options, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [currentRebus, answer, currentOptions, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity]);
        res.status(200).json(newLevel.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
});
exports.createLevel = createLevel;
//find by id
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    //use table name
    try {
        const level = yield db_1.default.query(`SELECT * FROM ${tableRebus} WHERE id = $1`, [id]);
        res.status(200).json(level.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error finding level' });
    }
});
exports.findById = findById;