"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncompleteExerciseById = exports.getIncompleteExercises = exports.getCompletedExercises = exports.removeIncompleteExercise = exports.addIncompleteExercise = exports.addCompleteExercise = exports.findUserByPhone = exports.findUserByEmail = exports.enableUser = exports.disableUser = exports.createUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const round_model_1 = __importDefault(require("../models/round.model"));
const getUsers = async (req, res) => {
    try {
        const users = await user_model_1.default.find({}, null, { lean: true, projection: undefined });
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка получения данных' });
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    if (!req.body.nickname) {
        res.status(400).json({ message: 'nickname is required' });
        return;
    }
    if (!req.body.age) {
        res.status(400).json({ message: 'age is required' });
        return;
    }
    const { email, phone, age, nickname } = req.body;
    try {
        const existingUser = await user_model_1.default.findOne({
            $or: [{ email }, { nickname }],
        }, null, { lean: true, projection: undefined });
        if (existingUser) {
            if ((existingUser === null || existingUser === void 0 ? void 0 : existingUser.email) === email) {
                res.status(400).json({ message: 'Email is already taken' });
                return;
            }
            if ((existingUser === null || existingUser === void 0 ? void 0 : existingUser.nickname) === nickname) {
                res.status(400).json({ message: 'Nickname is already taken' });
                return;
            }
        }
        const newUser = new user_model_1.default({
            email,
            nickname,
            phone: phone || '',
            age,
            points: 0,
            isActive: true,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
};
exports.createUser = createUser;
//disable user by id
const disableUser = async (req, res) => {
    const { _id } = req.body;
    try {
        const updatedUser = await user_model_1.default.findByIdAndUpdate(_id, { isActive: false });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'disable error' });
    }
};
exports.disableUser = disableUser;
//enable user by id
const enableUser = async (req, res) => {
    const { _id } = req.body;
    try {
        const updatedUser = await user_model_1.default.findByIdAndUpdate(_id, { isActive: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'enable error' });
    }
};
exports.enableUser = enableUser;
//get user info by email
const findUserByEmail = async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }
    const { email } = req.body;
    try {
        const user = await user_model_1.default.findOne({ email }, null, { lean: true, projection: undefined });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by email error' });
    }
};
exports.findUserByEmail = findUserByEmail;
//get user info by phone
const findUserByPhone = async (req, res) => {
    const { phone } = req.body;
    try {
        const user = await user_model_1.default.findOne({ phone }, null, { lean: true, projection: undefined });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by phone error' });
    }
};
exports.findUserByPhone = findUserByPhone;
// Добавление прогресса (завершение задания)
const addCompleteExercise = async (req, res) => {
    try {
        const { id, roundId } = req.params;
        const user = await user_model_1.default.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        const round = await round_model_1.default.findOne({ id: roundId });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return;
        }
        const isExerciseExists = user.progress.completedExercises.some((ex) => ex.exerciseId === (round === null || round === void 0 ? void 0 : round.id) // Сравниваем числа
        );
        if (isExerciseExists) {
            res.status(400).json({ message: "Exercise already exists in complete exercises" });
            return;
        }
        user.progress.completedExercises.push({
            exerciseId: round.id,
            score: round.point,
        });
        user.progress.totalScore += round.point;
        await user.save();
        res.status(200).json({ message: "Progress added successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding progress", error });
    }
};
exports.addCompleteExercise = addCompleteExercise;
const addIncompleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const { exerciseId, progress } = req.body;
        const user = await user_model_1.default.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        const isExerciseExists = user.progress.incompleteExercises.some((ex) => ex.exerciseId === exerciseId);
        if (isExerciseExists) {
            res.status(400).json({ message: "Exercise already exists in incomplete exercises" });
            return;
        }
        user.progress.incompleteExercises.push({
            exerciseId,
            progress: progress || 0, // Если progress не передан, по умолчанию 0
        });
        await user.save();
        res.status(200).json({ message: "Incomplete exercise added successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding incomplete exercise", error });
    }
};
exports.addIncompleteExercise = addIncompleteExercise;
const removeIncompleteExercise = async (req, res) => {
    try {
        const { id, exerciseId } = req.params;
        const user = await user_model_1.default.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        const taskIndex = user.progress.incompleteExercises.findIndex((ex) => ex.exerciseId === +exerciseId);
        if (taskIndex === -1) {
            res.status(404).json({ message: "Task not found in incomplete exercises" });
            return;
        }
        user.progress.incompleteExercises.splice(taskIndex, 1);
        await user.save();
        res.status(200).json({ message: "Task removed from incomplete exercises successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "Error removing task from incomplete exercises", error });
    }
};
exports.removeIncompleteExercise = removeIncompleteExercise;
const getCompletedExercises = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await user_model_1.default.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        res.status(200).json(user.progress.completedExercises);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching completed exercises", error });
    }
};
exports.getCompletedExercises = getCompletedExercises;
const getIncompleteExercises = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await user_model_1.default.findById(id).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        res.status(200).json(user.progress.incompleteExercises);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching incomplete exercises", error });
    }
};
exports.getIncompleteExercises = getIncompleteExercises;
const getIncompleteExerciseById = async (req, res) => {
    try {
        const { id, exerciseId } = req.params;
        const user = await user_model_1.default.findById(id).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }
        const exercise = user.progress.incompleteExercises.find((ex) => ex.exerciseId.toString() === exerciseId);
        if (!exercise) {
            res.status(404).json({ message: "Incomplete exercise not found" });
            return;
        }
        res.status(200).json(exercise);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching incomplete exercise", error });
    }
};
exports.getIncompleteExerciseById = getIncompleteExerciseById;
