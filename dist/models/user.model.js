"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProgressSchema = new mongoose_1.Schema({
    completedExercises: [
        {
            exerciseId: { type: Number, required: true, },
            score: { type: Number, default: 0 },
            completedAt: { type: Date, default: Date.now },
        },
    ],
    incompleteExercises: [
        {
            exerciseId: { type: Number, required: true, },
            progress: { type: Number, default: 0 }, // Процент выполнения (0-100)
        },
    ],
    totalScore: { type: Number, default: 0 },
});
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
    phone: { type: String, default: "" },
    age: { type: Number, required: true },
    points: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    progress: { type: ProgressSchema, default: () => ({ completedExercises: [], incompleteExercises: [], totalScore: 0 }) },
}, { timestamps: { createdAt: "created_at" } });
const User = (0, mongoose_1.model)("User", UserSchema, "users");
exports.default = User;
