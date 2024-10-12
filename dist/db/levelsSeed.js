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
exports.levels14Plus = void 0;
const typesFront_1 = require("../typesFront");
const db_1 = __importDefault(require("../config/db"));
exports.levels14Plus = [
    {
        id: 1,
        date: '2024-10-09',
        type: typesFront_1.LevelType.NUMBER_SEQUENCE,
        sequence: [0, 3, 8, 15], // Example sequence
        answer: 24,
        options: ['24', '18', '21', '36'],
        mode: typesFront_1.LevelMode.VARIANTS // Правильный ответ для последовательности
        // Correct answer for the sequence
    },
    {
        id: 2,
        date: '2024-10-10',
        type: typesFront_1.LevelType.REBUS,
        mode: typesFront_1.LevelMode.VARIANTS,
        rebus: {
            lines: [
                { shapes: [{ type: 'circle', count: 2 }, { type: 'triangle', count: 1 }], result: 3 }, // 2 круга + 1 треугольник = 3
                { shapes: [{ type: 'square', count: 1 }, { type: 'circle', count: 1 }], result: 6 }, // 1 квадрат + 1 круг = 2
                { shapes: [{ type: 'circle', count: 3 }], result: 3 } // 3 круга = 3
            ]
        },
        question: 'How many circles?',
        correctAnswer: 5,
        hint: 'Count the circles in all lines!',
        options: ['3', '5', '4', '6']
    },
    {
        id: 3,
        date: '2024-10-10',
        type: typesFront_1.LevelType.REBUS,
        mode: typesFront_1.LevelMode.VARIANTS,
        rebus: {
            lines: [
                { shapes: [{ type: 'square', count: 1 }, { type: 'triangle', count: 1 }], result: 7 }, // 1 квадрат + 1 треугольник = 2
                { shapes: [{ type: 'triangle', count: 1 }, { type: 'circle', count: 1 }], result: 7 }, // 2 треугольника + 1 круг = 3
                { shapes: [{ type: 'square', count: 2 }, { type: 'circle', count: 3 }], result: 25 }, // 2 квадрата + 3 круга = 5
            ]
        },
        question: 'How many shapes in total?',
        correctAnswer: 10,
        hint: 'Count all the shapes in all lines!',
        options: ['9', '10', '8', '11']
    },
    {
        id: 4,
        date: '2024-10-10',
        type: typesFront_1.LevelType.REBUS,
        mode: typesFront_1.LevelMode.VARIANTS,
        rebus: {
            lines: [
                { shapes: [{ type: 'circle', count: 2 }, { type: 'square', count: 2 }], result: 18 }, // 4 круга + 3 квадрата = 7
                { shapes: [{ type: 'triangle', count: 1 }, { type: 'circle', count: 2 }], result: 13 }, // 5 треугольников + 2 круга = 7
                { shapes: [{ type: 'square', count: 2 }, { type: 'triangle', count: 1 }], result: 15 } // 2 квадрата + 4 треугольника = 6
            ]
        },
        question: 'How many triangles?',
        correctAnswer: 11,
        hint: 'Count the triangles in all lines!',
        options: ['2', '6', '3', '5']
    },
    {
        id: 5,
        date: '2024-10-09',
        type: typesFront_1.LevelType.NUMBER_GRID33,
        sequence: [3, 2, 3, 4, 3, 4, 5, 6, ''],
        answer: 24,
        options: ['2', '3', '4', '5'],
        mode: typesFront_1.LevelMode.VARIANTS // Правильный ответ для последовательности
        // Correct answer for the sequence
    },
    {
        id: 6,
        date: '2024-10-09',
        type: typesFront_1.LevelType.SHAPE_SELECTION,
        answer: 2,
        options: ['1', '2', '3', '4'],
        mode: typesFront_1.LevelMode.VARIANTS,
        shapes: [
            { id: 1, type: 'star', color: '#FF6347', isFill: true }, // Красная звезда
            { id: 2, type: 'heart', color: '#32CD32', isFill: true }, // Синий шестиугольник
            { id: 3, type: 'triangle', color: '#FF6347', isFill: false }, // Зеленый пятиугольник
            { id: 4, type: 'cross', color: '#32CD32', isFill: true }, // Золотой восьмиугольник (лишний, не закрашенный)
        ]
        // Правильный ответ для последовательности
        // Correct answer for the sequence
    }
];
function insertLevels() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const level of exports.levels14Plus) {
            try {
                const query = `
        INSERT INTO levels (number, type, mode, hint, "isActive", answer)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
                const values = [
                    level.id,
                    level.type,
                    level.mode,
                    level.hint,
                    true,
                    0
                ];
                yield db_1.default.query(query, values);
                console.log(`Inserted level with id ${level.id}`);
            }
            catch (error) {
                console.error(`Error inserting level with id ${level.id}:`, error);
            }
        }
    });
}
exports.default = insertLevels;
