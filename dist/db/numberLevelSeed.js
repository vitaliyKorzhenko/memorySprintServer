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
const numberGridlevels = {
    "levels": [
        {
            "id": 1,
            "number": 1,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                9,
                16,
                25,
                null,
                49,
                64,
                81,
                100,
                121
            ],
            "answer": 36,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "36",
                "27",
                "33",
                "26"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 2,
            "number": 2,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                16,
                24,
                8,
                16,
                24,
                8,
                null,
                24
            ],
            "answer": 16,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "16",
                "14",
                "24",
                "23"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 3,
            "number": 3,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                10,
                12,
                14,
                null,
                18,
                20,
                22,
                24
            ],
            "answer": 16,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "16",
                "18",
                "6",
                "23"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 4,
            "number": 4,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                9,
                13,
                17,
                21,
                null,
                29,
                33,
                37,
                41
            ],
            "answer": 25,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "25",
                "22",
                "34",
                "20"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 5,
            "number": 5,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                7,
                10,
                5,
                12,
                3,
                14,
                1,
                null
            ],
            "answer": 16,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "16",
                "19",
                "18",
                "9"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 6,
            "number": 6,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                64,
                81,
                100,
                null,
                144,
                169,
                196,
                225,
                256
            ],
            "answer": 121,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "121",
                "120",
                "114",
                "126"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 7,
            "number": 7,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                9,
                null,
                27,
                9,
                18,
                27,
                9,
                18,
                27
            ],
            "answer": 18,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "18",
                "14",
                "24",
                "16"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 8,
            "number": 8,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                2,
                null,
                6,
                8,
                10,
                12,
                14,
                16,
                18
            ],
            "answer": 4,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "4",
                "3",
                "13",
                "5"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 9,
            "number": 9,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                null,
                14,
                17,
                20,
                23,
                26,
                29,
                32
            ],
            "answer": 11,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "11",
                "10",
                "6",
                "7"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 10,
            "number": 10,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                10,
                9,
                12,
                null,
                14,
                5,
                16,
                3,
                18
            ],
            "answer": 7,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "7",
                "-2",
                "10",
                "16"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 11,
            "number": 11,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                4,
                null,
                16,
                25,
                36,
                49,
                64,
                81,
                100
            ],
            "answer": 9,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "9",
                "6",
                "16",
                "-1"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 12,
            "number": 12,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                6,
                12,
                18,
                6,
                12,
                18,
                6,
                12,
                null
            ],
            "answer": 18,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "18",
                "9",
                "24",
                "11"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 13,
            "number": 13,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                null,
                10,
                12,
                14,
                16,
                18,
                20,
                22,
                24
            ],
            "answer": 8,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "8",
                "2",
                "15",
                "7"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 14,
            "number": 14,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                2,
                6,
                null,
                14,
                18,
                22,
                26,
                30,
                34
            ],
            "answer": 10,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "10",
                "3",
                "1",
                "13"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 15,
            "number": 15,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                7,
                10,
                5,
                12,
                3,
                null,
                1,
                16
            ],
            "answer": 14,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "14",
                "5",
                "9",
                "7"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 16,
            "number": 16,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                4,
                9,
                16,
                25,
                36,
                null,
                64,
                81
            ],
            "answer": 49,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "49",
                "52",
                "56",
                "50"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 17,
            "number": 17,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                7,
                14,
                21,
                7,
                14,
                21,
                7,
                14,
                null
            ],
            "answer": 21,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "21",
                "30",
                "20",
                "19"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 18,
            "number": 18,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                6,
                8,
                10,
                null,
                14,
                16,
                18,
                20,
                22
            ],
            "answer": 12,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "12",
                "6",
                "4",
                "14"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 19,
            "number": 19,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                5,
                9,
                13,
                17,
                21,
                null,
                29,
                33
            ],
            "answer": 25,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "25",
                "15",
                "23",
                "21"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 20,
            "number": 20,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                3,
                2,
                5,
                0,
                null,
                -2,
                9,
                -4,
                11
            ],
            "answer": 7,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "7",
                "6",
                "10",
                "5"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 21,
            "number": 21,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                16,
                25,
                36,
                49,
                64,
                81,
                null,
                121,
                144
            ],
            "answer": 100,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "100",
                "109",
                "104",
                "103"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 22,
            "number": 22,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                16,
                24,
                8,
                16,
                24,
                8,
                16,
                null
            ],
            "answer": 24,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "24",
                "15",
                "17",
                "32"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 23,
            "number": 23,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                10,
                null,
                14,
                16,
                18,
                20,
                22,
                24
            ],
            "answer": 12,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "12",
                "14",
                "3",
                "13"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 24,
            "number": 24,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                7,
                12,
                17,
                22,
                27,
                null,
                37,
                42,
                47
            ],
            "answer": 32,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "32",
                "41",
                "36",
                "31"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 25,
            "number": 25,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                0,
                3,
                -2,
                5,
                null,
                7,
                -6,
                9
            ],
            "answer": -4,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "-4",
                "3",
                "-1",
                "-3"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 26,
            "number": 26,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                null,
                16,
                25,
                36,
                49,
                64,
                81,
                100,
                121
            ],
            "answer": 9,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "9",
                "3",
                "6",
                "10"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 27,
            "number": 27,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                6,
                12,
                18,
                null,
                12,
                18,
                6,
                12,
                18
            ],
            "answer": 6,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "6",
                "10",
                "15",
                "-3"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 28,
            "number": 28,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                16,
                18,
                20,
                22,
                24,
                null,
                28,
                30,
                32
            ],
            "answer": 26,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "26",
                "30",
                "23",
                "25"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 29,
            "number": 29,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                5,
                9,
                13,
                17,
                21,
                25,
                29,
                null,
                37
            ],
            "answer": 33,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "33",
                "36",
                "38",
                "26"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 30,
            "number": 30,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                null,
                3,
                6,
                1,
                8,
                -1,
                10,
                -3,
                12
            ],
            "answer": 4,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "4",
                "2",
                "-4",
                "5"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 31,
            "number": 31,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                null,
                9,
                16,
                25,
                36,
                49,
                64,
                81
            ],
            "answer": 4,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "4",
                "7",
                "10",
                "-2"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 32,
            "number": 32,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                16,
                24,
                8,
                16,
                24,
                8,
                null,
                24
            ],
            "answer": 16,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "16",
                "14",
                "24",
                "10"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 33,
            "number": 33,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                12,
                null,
                16,
                18,
                20,
                22,
                24,
                26,
                28
            ],
            "answer": 14,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "14",
                "17",
                "19",
                "11"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 34,
            "number": 34,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                10,
                13,
                16,
                19,
                null,
                25,
                28,
                31,
                34
            ],
            "answer": 22,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "22",
                "19",
                "23",
                "12"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 35,
            "number": 35,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                10,
                9,
                12,
                7,
                14,
                null,
                16,
                3,
                18
            ],
            "answer": 5,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "5",
                "1",
                "-5",
                "13"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 36,
            "number": 36,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                9,
                16,
                25,
                36,
                49,
                64,
                null,
                100,
                121
            ],
            "answer": 81,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "81",
                "73",
                "90",
                "72"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 37,
            "number": 37,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                8,
                16,
                24,
                8,
                16,
                24,
                null,
                16,
                24
            ],
            "answer": 8,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "8",
                "3",
                "17",
                "10"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 38,
            "number": 38,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                4,
                6,
                null,
                10,
                12,
                14,
                16,
                18,
                20
            ],
            "answer": 8,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "8",
                "-1",
                "5",
                "7"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 39,
            "number": 39,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                5,
                9,
                13,
                17,
                null,
                25,
                29,
                33,
                37
            ],
            "answer": 21,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "21",
                "22",
                "24",
                "19"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 40,
            "number": 40,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                4,
                3,
                6,
                null,
                8,
                -1,
                10,
                -3,
                12
            ],
            "answer": 1,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "1",
                "-7",
                "-4",
                "2"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 41,
            "number": 41,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                16,
                25,
                36,
                49,
                64,
                81,
                100,
                null,
                144
            ],
            "answer": 121,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "121",
                "112",
                "124",
                "126"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 42,
            "number": 42,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                7,
                14,
                null,
                7,
                14,
                21,
                7,
                14,
                21
            ],
            "answer": 21,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "21",
                "22",
                "14",
                "11"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 43,
            "number": 43,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                6,
                8,
                null,
                12,
                14,
                16,
                18,
                20,
                22
            ],
            "answer": 10,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "10",
                "0",
                "3",
                "19"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 44,
            "number": 44,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                6,
                11,
                16,
                null,
                26,
                31,
                36,
                41
            ],
            "answer": 21,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "21",
                "27",
                "25",
                "30"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 45,
            "number": 45,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                9,
                8,
                11,
                6,
                13,
                4,
                15,
                null,
                17
            ],
            "answer": 2,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "2",
                "7",
                "10",
                "9"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 46,
            "number": 46,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                49,
                64,
                81,
                100,
                121,
                144,
                169,
                196,
                null
            ],
            "answer": 225,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "225",
                "223",
                "221",
                "220"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 47,
            "number": 47,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                null,
                16,
                24,
                8,
                16,
                24,
                8,
                16,
                24
            ],
            "answer": 8,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "8",
                "15",
                "1",
                "14"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 48,
            "number": 48,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                null,
                4,
                6,
                8,
                10,
                12,
                14,
                16,
                18
            ],
            "answer": 2,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "2",
                "-2",
                "10",
                "-6"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 49,
            "number": 49,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                1,
                null,
                9,
                13,
                17,
                21,
                25,
                29,
                33
            ],
            "answer": 5,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "5",
                "6",
                "13",
                "9"
            ],
            "complexity": "easy",
            "mode": "variants"
        },
        {
            "id": 50,
            "number": 50,
            "date": "2024-11-07",
            "type": "number_grid_33",
            "sequence": [
                6,
                5,
                8,
                3,
                null,
                1,
                12,
                -1,
                14
            ],
            "answer": 10,
            "point": 5,
            "headerEn": "What is the missing number in the sequence?",
            "headerUa": "Яке число пропущено в послідовності?",
            "options": [
                "10",
                "11",
                "15",
                "1"
            ],
            "complexity": "easy",
            "mode": "variants"
        }
    ]
};
function insertNumberGridLevels() {
    return __awaiter(this, void 0, void 0, function* () {
        const levels = numberGridlevels.levels;
        console.log('LEVELS SIZE', levels.length);
        console.log('FIRST LEVEL', levels[0]);
        for (const level of levels) {
            try {
                const query = `
          INSERT INTO levels (number, type, mode, hint, "isActive", answer, options, data)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;
                const values = [
                    level.id,
                    level.type,
                    level.mode,
                    '',
                    true,
                    level.answer,
                    JSON.stringify(level.options),
                    JSON.stringify({
                        en: level.headerEn,
                        ua: level.headerUa,
                        suequnce: level.sequence
                    })
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
exports.default = insertNumberGridLevels;
