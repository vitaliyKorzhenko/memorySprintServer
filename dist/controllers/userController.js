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
exports.findUserByPhone = exports.findUserByEmail = exports.enableUser = exports.disableUser = exports.createUser = exports.getUsers = void 0;
const db_1 = __importDefault(require("../config/db"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка получения данных' });
    }
});
exports.getUsers = getUsers;
//create user use email, phone, age, "isActive",
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.phone || !req.body.age) {
        res.status(400).json({ message: 'email, phone age is required' });
        return;
    }
    const { email, phone, age } = req.body;
    let isActive = true;
    try {
        const result = yield db_1.default.query(`INSERT INTO users (email, phone, age, "isActive", created_at)
      VALUES ($1, $2, $3, $4, NOW()) RETURNING *`, [email, phone, age, isActive]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
});
exports.createUser = createUser;
//disable user by id
const disableUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query(`UPDATE users SET "isActive" = false WHERE id = $1 RETURNING *`, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'disable error' });
    }
});
exports.disableUser = disableUser;
//enable user by id
const enableUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query(`UPDATE users SET "isActive" = true WHERE id = $1 RETURNING *`, [id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'enable error' });
    }
});
exports.enableUser = enableUser;
//get user info by email
const findUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(' req.body', req.body);
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    const { email } = req.body;
    try {
        const result = yield db_1.default.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by email error' });
    }
});
exports.findUserByEmail = findUserByEmail;
//get user info by phone
const findUserByPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone } = req.params;
    try {
        const result = yield db_1.default.query(`SELECT * FROM users WHERE phone = $1`, [phone]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by phone error' });
    }
});
exports.findUserByPhone = findUserByPhone;
