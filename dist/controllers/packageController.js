"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackages = void 0;
const db_1 = __importDefault(require("../config/db"));
const tablePackage = 'packages';
const tablePackageLevels = 'package_levels';
//get all packages
const getPackages = async (req, res) => {
    try {
        const result = await db_1.default.query(`SELECT * FROM ${tablePackage}`);
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get packages error' });
    }
};
exports.getPackages = getPackages;
