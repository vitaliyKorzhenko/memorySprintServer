"use strict";
// Enum for level types
Object.defineProperty(exports, "__esModule", { value: true });
exports.levels14Plus = exports.levels10to14 = exports.levels6to9 = exports.AgeGroup = exports.LevelType = exports.LevelMode = void 0;
exports.getLevelById = getLevelById;
var LevelMode;
(function (LevelMode) {
    LevelMode["KEYBOARD"] = "keyboard";
    LevelMode["VARIANTS"] = "variants";
})(LevelMode || (exports.LevelMode = LevelMode = {}));
var LevelType;
(function (LevelType) {
    LevelType["NUMBER_SEQUENCE"] = "number_sequence";
    LevelType["LOGIC"] = "logic";
    LevelType["MATH"] = "math";
    LevelType["ATTENTION"] = "attention";
    LevelType["REBUS"] = "rebus";
    LevelType["TEXT_TASK"] = "textask";
    LevelType["NUMBER_GRID33"] = "number_grid_33";
    LevelType["SHAPE_SELECTION"] = "shape_selection";
    LevelType["PENCIL_PUZZLE"] = "pencil_puzzle";
    LevelType["MAX_MIN"] = "max_min";
})(LevelType || (exports.LevelType = LevelType = {}));
// Enum for age groups
var AgeGroup;
(function (AgeGroup) {
    AgeGroup["AGE_6_TO_9"] = "6-9";
    AgeGroup["AGE_10_TO_14"] = "10-14";
    AgeGroup["AGE_15_PLUS"] = "15+";
})(AgeGroup || (exports.AgeGroup = AgeGroup = {}));
// Array for age group 6-9
exports.levels6to9 = [
    {
        id: 1,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [10, 20, 30, 40], // Увеличение на 10
        answer: 50, // Правильный ответ для последовательности
    },
    {
        id: 10,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [2, 4, 8, 16], // Увеличение в 2 раза
        answer: 32,
        mode: LevelMode.VARIANTS // Правильный ответ для последовательности
        // Правильный ответ для последовательности
    },
    {
        id: 14,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [1, 3, 5, 7], // Нечётные числа
        answer: 9,
        mode: LevelMode.VARIANTS // Правильный ответ для последовательности
    },
    {
        id: 25,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [5, 10, 15, 10], // Смешанная последовательность (5, 10, 15, 10)
        answer: 5,
        mode: LevelMode.VARIANTS // Правильный ответ для последовательности
    },
    {
        id: 33,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [1, 2, 4, 8], // Увеличение в 2 раза
        answer: 16,
        mode: LevelMode.VARIANTS // Правильный ответ для последовательности      // Правильный ответ для последовательности
    },
    {
        id: 47,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [10, 9, 8, 7], // Уменьшение на 1
        answer: 6, // Правильный ответ для последовательности
    },
    {
        id: 56,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [1, 2, 3, 1], // Повторение
        answer: 2, // Правильный ответ для последовательности
    },
    {
        id: 62,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [4, 8, 4, 0], // Уменьшение на 4, потом обратно
        answer: 0, // Правильный ответ для последовательности
    },
];
// Array for age group 10-14
exports.levels10to14 = [
    {
        id: 1,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [1, 2, 4, 7, 11], // Example sequence
        answer: 16, // Correct answer for the sequence
    },
];
// Array for age group 14+
exports.levels14Plus = [
    {
        id: 1,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [0, 3, 8, 15], // Example sequence
        answer: 24,
        options: ['24', '18', '21', '36'],
        mode: LevelMode.VARIANTS,
        point: 5
        // Correct answer for the sequence
    },
    {
        id: 2,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
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
        options: ['3', '5', '4', '6'],
        point: 6
    },
    {
        id: 3,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
        rebus: {
            lines: [
                { shapes: [{ type: 'square', count: 1 }, { type: 'triangle', count: 1 }], result: 7 }, // 1 квадрат + 1 треугольник = 2
                { shapes: [{ type: 'triangle', count: 1 }, { type: 'circle', count: 1 }], result: 7 }, // 2 треугольника + 1 круг = 3
                { shapes: [{ type: 'square', count: 2 }, { type: 'circle', count: 3 }], result: 25 }, // 2 квадрата + 3 круга = 5
            ]
        },
        point: 7,
        question: 'How many shapes in total?',
        correctAnswer: 10,
        hint: 'Count all the shapes in all lines!',
        options: ['9', '10', '8', '11']
    },
    {
        id: 4,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
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
        options: ['2', '6', '3', '5'],
        point: 8
    },
    {
        id: 5,
        date: '2024-10-09',
        type: LevelType.NUMBER_GRID33,
        sequence: [3, 2, 3, 4, 3, 4, 5, 6, ''],
        answer: 24,
        options: ['2', '3', '4', '5'],
        mode: LevelMode.VARIANTS,
        point: 4
        // Правильный ответ для последовательности
        // Correct answer for the sequence
    },
    {
        id: 6,
        date: '2024-10-09',
        type: LevelType.SHAPE_SELECTION,
        answer: 2,
        options: ['1', '2', '3', '4'],
        mode: LevelMode.VARIANTS,
        shapes: [
            { id: 1, type: 'star', color: '#FF6347', isFill: true }, // Красная звезда
            { id: 2, type: 'heart', color: '#32CD32', isFill: true }, // Синий шестиугольник
            { id: 3, type: 'triangle', color: '#FF6347', isFill: false }, // Зеленый пятиугольник
            { id: 4, type: 'cross', color: '#32CD32', isFill: true }, // Золотой восьмиугольник (лишний, не закрашенный)
        ],
        point: 5
        // Правильный ответ для последовательности
        // Correct answer for the sequence
    },
    {
        id: 7,
        date: '2024-10-09',
        type: LevelType.PENCIL_PUZZLE,
        answer: 2,
        options: ['1', '2', '3', '4'],
        mode: LevelMode.VARIANTS,
        point: 2
    },
    {
        id: 8,
        date: '2024-10-09',
        type: LevelType.TEXT_TASK,
        text: 'How many apples are on the table?',
        answer: 2,
        details: { image: 'apple.jpg' },
        useImage: true,
        point: 5,
        mode: LevelMode.VARIANTS
    },
    {
        id: 9,
        date: '2024-10-09',
        type: LevelType.MAX_MIN,
        sequence: ['2^100', '3^50', '4^25'],
        answer: 2,
        point: 3,
        mode: LevelMode.VARIANTS,
        maxOrMinFind: 'max',
    }
];
// Function to get a level by age group and level ID
function getLevelById(ageGroup, levelId) {
    let levels = [];
    let defaultLevel = exports.levels14Plus[0];
    // Select the appropriate level array based on the age group
    switch (ageGroup) {
        case AgeGroup.AGE_6_TO_9:
            levels = exports.levels6to9;
            break;
        case AgeGroup.AGE_10_TO_14:
            levels = exports.levels10to14;
            break;
        case AgeGroup.AGE_15_PLUS:
            levels = exports.levels14Plus;
            break;
        default:
            return defaultLevel; // If the age group is not recognized
    }
    // Find and return the level with the matching ID
    const currentLevel = levels.find(level => level.id == levelId);
    if (currentLevel)
        return currentLevel;
    return defaultLevel;
}
