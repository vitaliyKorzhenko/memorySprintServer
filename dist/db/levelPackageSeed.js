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
const db_1 = __importDefault(require("../config/db"));
const typesFront_1 = require("../typesFront");
function insertLevelPackage() {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield db_1.default.query(query, values);
            //console.log(`Inserted level with id ${level.id}`);
        }
        catch (error) {
            console.error(`Error inserting level with id `, error);
        }
    });
}
exports.default = insertLevelPackage;
