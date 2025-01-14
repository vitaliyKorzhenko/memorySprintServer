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
exports.addUserHistory = exports.findUserByPhone = exports.findUserByEmail = exports.enableUser = exports.disableUser = exports.createUser = exports.getUsers = void 0;
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
    // Check email
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    // Check nickname
    if (!req.body.nickname) {
        res.status(400).json({ message: 'nickname is required' });
        return;
    }
    // Check age
    if (!req.body.age) {
        res.status(400).json({ message: 'age is required' });
        return;
    }
    const { email, phone, age, nickname } = req.body;
    const userData = {
        email: email,
        nickname: nickname,
        age: age,
        points: 0,
        isActive: true,
        phone: phone !== null && phone !== void 0 ? phone : '',
    };
    let isActive = true;
    try {
        // Check if email or nickname already exists
        const existingUserCheck = yield db_1.default.query('SELECT * FROM users WHERE email = $1 OR nickname = $2', [email, nickname]);
        if (existingUserCheck.rows.length > 0) {
            const existingUser = existingUserCheck.rows[0];
            if (existingUser.email === email) {
                res.status(400).json({ message: 'Email is already taken' });
                return;
            }
            if (existingUser.nickname === nickname) {
                res.status(400).json({ message: 'Nickname is already taken' });
                return;
            }
        }
        // Insert new user
        const result = yield db_1.default.query(`INSERT INTO users (email, nickname, phone, age, "isActive", created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`, [userData.email, userData.nickname, userData.phone, userData.age, isActive]);
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
    const { id } = req.body;
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
    const { id } = req.body;
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
    const { phone } = req.body;
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
const addUserHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, gameType, status, points, gameDetails, minusLifes } = req.body;
    const userHistoryData = {
        userId: userId,
        gameType: gameType,
        status: status,
        points: points,
        gameDetails: gameDetails,
        minusLifes: minusLifes
    };
    try {
        if (!userId) {
            res.status(400).json({ message: 'userId is required' });
            return;
        }
        const result = yield db_1.default.query(`INSERT INTO user_history (userId, game_type, status, points, game_details, created_at)
            VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`, [
            userHistoryData.userId,
            userHistoryData.gameType,
            userHistoryData.status,
            userHistoryData.points,
            userHistoryData.gameDetails,
        ]);
        //add points to user
        const user = yield db_1.default.query(`SELECT * FROM users WHERE id = $1`, [userId]);
        const userPoints = user.rows[0].points + points;
        //update user lifes
        const userLifes = user.rows[0].lifes > 0 && user.rows[0].lifes > minusLifes ? user.rows[0].lifes - minusLifes : 0;
        //update user points and lifes
        yield db_1.default.query(`UPDATE users SET points = $1, lifes = $2 WHERE id = $3`, [userPoints, userLifes, userId]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'add user history error' });
    }
});
exports.addUserHistory = addUserHistory;
