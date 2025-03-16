"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const typesFront_1 = require("../typesFront");
async function insertLevelPackage() {
    const packageData = {
        levels: [
            {
                id: 19,
                type: typesFront_1.LevelType.NUMBER_SEQUENCE,
            },
            {
                id: 80,
                type: typesFront_1.LevelType.NUMBER_GRID33,
            },
            {
                id: 21,
                type: typesFront_1.LevelType.NUMBER_SEQUENCE,
            },
            {
                id: 80,
                type: typesFront_1.LevelType.NUMBER_GRID33
            },
            {
                id: 81,
                type: typesFront_1.LevelType.NUMBER_GRID33
            }
        ],
    };
    const levelPackage = {
        category: 'dailyPackage',
        data: JSON.stringify(packageData)
    };
    try {
        const query = `
          INSERT INTO level_package (category, data)
          VALUES ($1, $2)
        `;
        const values = [
            levelPackage.category,
            levelPackage.data
        ];
        await db_1.default.query(query, values);
        //console.log(`Inserted level with id ${level.id}`);
    }
    catch (error) {
        console.error(`Error inserting level with id `, error);
    }
}
exports.default = insertLevelPackage;
