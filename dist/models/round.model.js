"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const roundSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    type: { type: String, required: true },
    sequence: { type: [Number], required: true },
    answer: { type: Number, required: true },
    point: { type: Number, required: true },
    headerEn: { type: String },
    headerUa: { type: String },
    options: { type: [String], required: true },
    complexity: { type: String, required: true },
    mode: { type: String, required: true },
    variants: { type: [Number], required: true }
});
const Round = mongoose.model('Round', roundSchema);
exports.default = Round;
