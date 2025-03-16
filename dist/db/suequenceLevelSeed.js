"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
let levelsSueqenceJSON = [{
        "levels": [
            {
                "id": 904,
                "number": 904,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    43,
                    42,
                    41,
                    40
                ],
                "answer": 39,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "32",
                    "39",
                    "45",
                    "48"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 905,
                "number": 905,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    30,
                    25,
                    20,
                    15
                ],
                "answer": 10,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "3",
                    "10",
                    "11",
                    "17"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 906,
                "number": 906,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    15,
                    10,
                    5,
                    0
                ],
                "answer": -5,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-8",
                    "-5",
                    "-4",
                    "3"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 907,
                "number": 907,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    5,
                    6,
                    7,
                    8
                ],
                "answer": 9,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "1",
                    "9",
                    "13",
                    "14"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 908,
                "number": 908,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    45,
                    46,
                    47,
                    48
                ],
                "answer": 49,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "41",
                    "49",
                    "54",
                    "58"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 909,
                "number": 909,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    3,
                    1,
                    -1,
                    -3
                ],
                "answer": -5,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-12",
                    "-6",
                    "-5",
                    "0"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 910,
                "number": 910,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -9,
                    -12,
                    -15,
                    -18
                ],
                "answer": -21,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-28",
                    "-27",
                    "-21",
                    "-18"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 911,
                "number": 911,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -10,
                    -8,
                    -6,
                    -4
                ],
                "answer": -2,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-9",
                    "-5",
                    "-2",
                    "7"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 912,
                "number": 912,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    24,
                    20,
                    16,
                    12
                ],
                "answer": 8,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "5",
                    "8",
                    "9",
                    "15"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 913,
                "number": 913,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -6,
                    -8,
                    -10,
                    -12
                ],
                "answer": -14,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-21",
                    "-14",
                    "-8",
                    "-7"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 914,
                "number": 914,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    48,
                    50,
                    52,
                    54
                ],
                "answer": 56,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "55",
                    "56",
                    "57",
                    "63"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 915,
                "number": 915,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    28,
                    24,
                    20,
                    16
                ],
                "answer": 12,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "5",
                    "6",
                    "12",
                    "18"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 916,
                "number": 916,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    27,
                    26,
                    25,
                    24
                ],
                "answer": 23,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "17",
                    "23",
                    "25",
                    "29"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 917,
                "number": 917,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -10,
                    -9,
                    -8,
                    -7
                ],
                "answer": -6,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-16",
                    "-6",
                    "-1",
                    "0"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 918,
                "number": 918,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -10,
                    -13,
                    -16,
                    -19
                ],
                "answer": -22,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-26",
                    "-23",
                    "-22",
                    "-15"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 530,
                "number": 530,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    1,
                    -4,
                    -9,
                    -14
                ],
                "answer": -19,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-29",
                    "-25",
                    "-19",
                    "-17"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 531,
                "number": 531,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -4,
                    -3,
                    -2,
                    -1
                ],
                "answer": 0,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-7",
                    "0",
                    "4",
                    "7"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 532,
                "number": 532,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    35,
                    39,
                    43,
                    47
                ],
                "answer": 51,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "46",
                    "48",
                    "51",
                    "55"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 533,
                "number": 533,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    39,
                    42,
                    45,
                    48
                ],
                "answer": 51,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "41",
                    "43",
                    "51",
                    "54"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 534,
                "number": 534,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    -5,
                    -9,
                    -13,
                    -17
                ],
                "answer": -21,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "-24",
                    "-22",
                    "-21",
                    "-17"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 589,
                "number": 589,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    9,
                    36,
                    144,
                    576
                ],
                "answer": 2304,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "2295",
                    "2298",
                    "2304",
                    "2307"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 590,
                "number": 590,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    9,
                    27,
                    81,
                    243
                ],
                "answer": 729,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "722",
                    "727",
                    "729",
                    "734"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 591,
                "number": 591,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    7,
                    42,
                    252,
                    1512
                ],
                "answer": 9072,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "9066",
                    "9072",
                    "9076",
                    "9077"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 592,
                "number": 592,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    1,
                    6,
                    36,
                    216
                ],
                "answer": 1296,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "1295",
                    "1296",
                    "1301",
                    "1304"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 593,
                "number": 593,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    5,
                    25,
                    125,
                    625
                ],
                "answer": 3125,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "3122",
                    "3124",
                    "3125",
                    "3126"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 594,
                "number": 594,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    7,
                    35,
                    175,
                    875
                ],
                "answer": 4375,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "4371",
                    "4375",
                    "4376",
                    "4382"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 595,
                "number": 595,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    1,
                    5,
                    25,
                    125
                ],
                "answer": 625,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "622",
                    "625",
                    "626",
                    "634"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 596,
                "number": 596,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    4,
                    8,
                    16
                ],
                "answer": 32,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "22",
                    "23",
                    "24",
                    "32"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 597,
                "number": 597,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    6,
                    36,
                    216,
                    1296
                ],
                "answer": 7776,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "7773",
                    "7775",
                    "7776",
                    "7778"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 598,
                "number": 598,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    10,
                    20,
                    40,
                    80
                ],
                "answer": 160,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "156",
                    "158",
                    "160",
                    "162"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 599,
                "number": 599,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    10,
                    50,
                    250,
                    1250
                ],
                "answer": 6250,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "6240",
                    "6241",
                    "6250",
                    "6252"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 600,
                "number": 600,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    10,
                    60,
                    360,
                    2160
                ],
                "answer": 12960,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "12954",
                    "12955",
                    "12960",
                    "12966"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 601,
                "number": 601,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    4,
                    16,
                    64,
                    256
                ],
                "answer": 1024,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "1022",
                    "1023",
                    "1024",
                    "1026"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 602,
                "number": 602,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    10,
                    30,
                    90,
                    270
                ],
                "answer": 810,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "802",
                    "810",
                    "813",
                    "815"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 603,
                "number": 603,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    6,
                    36,
                    216,
                    1296
                ],
                "answer": 7776,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "7767",
                    "7773",
                    "7774",
                    "7776"
                ],
                "complexity": "easy",
                "mode": "variants"
            }
        ],
        "levelDigits": [
            {
                "id": 226,
                "number": 226,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    115,
                    124,
                    133,
                    313
                ],
                "answer": 322,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "322",
                    "317",
                    "320",
                    "324"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 849,
                "number": 849,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    175,
                    247,
                    256,
                    319
                ],
                "answer": 328,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "328",
                    "327",
                    "330",
                    "332"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 850,
                "number": 850,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    80,
                    107,
                    116,
                    134
                ],
                "answer": 143,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "143",
                    "138",
                    "140",
                    "145"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 851,
                "number": 851,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    77,
                    95,
                    149,
                    167
                ],
                "answer": 176,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "176",
                    "172",
                    "174",
                    "178"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 852,
                "number": 852,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    56,
                    65,
                    92,
                    128
                ],
                "answer": 137,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "137",
                    "133",
                    "136",
                    "139"
                ],
                "complexity": "easy",
                "mode": "variants"
            }
        ],
        "levelFebs": [
            {
                "id": 191,
                "number": 191,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    5,
                    8,
                    13,
                    21
                ],
                "answer": 34,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "24",
                    "31",
                    "34",
                    "37"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 192,
                "number": 192,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    1,
                    3,
                    4
                ],
                "answer": 7,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "2",
                    "3",
                    "7",
                    "13"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 193,
                "number": 193,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    7,
                    2,
                    9,
                    11
                ],
                "answer": 20,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "20",
                    "21",
                    "27",
                    "29"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 194,
                "number": 194,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    3,
                    5,
                    8
                ],
                "answer": 13,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "11",
                    "13",
                    "14",
                    "16"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 195,
                "number": 195,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    1,
                    7,
                    8,
                    15
                ],
                "answer": 23,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "16",
                    "23",
                    "24",
                    "25"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 196,
                "number": 196,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    8,
                    2,
                    10,
                    12
                ],
                "answer": 22,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "20",
                    "22",
                    "24",
                    "28"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 197,
                "number": 197,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    3,
                    6,
                    9,
                    15
                ],
                "answer": 24,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "16",
                    "23",
                    "24",
                    "28"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 198,
                "number": 198,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    3,
                    5,
                    8
                ],
                "answer": 13,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "6",
                    "7",
                    "11",
                    "13"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 199,
                "number": 199,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    9,
                    11,
                    20
                ],
                "answer": 31,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "21",
                    "31",
                    "34",
                    "35"
                ],
                "complexity": "easy",
                "mode": "variants"
            },
            {
                "id": 200,
                "number": 200,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    3,
                    7,
                    10,
                    17
                ],
                "answer": 27,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "20",
                    "27",
                    "33",
                    "35"
                ],
                "complexity": "easy",
                "mode": "variants"
            }
        ],
        "levelsSquare": [
            {
                "id": 906,
                "number": 906,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    15,
                    24,
                    35,
                    48
                ],
                "answer": 63,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "57",
                    "62",
                    "63",
                    "70"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 907,
                "number": 907,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    3,
                    8,
                    15,
                    24
                ],
                "answer": 35,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "26",
                    "31",
                    "35",
                    "44"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 908,
                "number": 908,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    5,
                    10,
                    17,
                    26
                ],
                "answer": 37,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "31",
                    "33",
                    "36",
                    "37"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 909,
                "number": 909,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    15,
                    24,
                    35,
                    48
                ],
                "answer": 63,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "53",
                    "59",
                    "63",
                    "64"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 910,
                "number": 910,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    0,
                    3,
                    8,
                    15
                ],
                "answer": 24,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "19",
                    "21",
                    "24",
                    "33"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 911,
                "number": 911,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    3,
                    8,
                    15,
                    24
                ],
                "answer": 35,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "28",
                    "34",
                    "35",
                    "39"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 912,
                "number": 912,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    15,
                    24,
                    35,
                    48
                ],
                "answer": 63,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "55",
                    "60",
                    "63",
                    "64"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 913,
                "number": 913,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    15,
                    24,
                    35,
                    48
                ],
                "answer": 63,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "53",
                    "57",
                    "59",
                    "63"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 914,
                "number": 914,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    5,
                    10,
                    17,
                    26
                ],
                "answer": 37,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "28",
                    "33",
                    "37",
                    "42"
                ],
                "complexity": "medium",
                "mode": "variants"
            },
            {
                "id": 915,
                "number": 915,
                "date": "2024-10-31",
                "type": "number_sequence",
                "sequence": [
                    2,
                    5,
                    10,
                    17
                ],
                "answer": 26,
                "point": 5,
                "headerEn": "What is the next number in the sequence?",
                "headerUa": "Яке наступне число в послідовності?",
                "options": [
                    "18",
                    "19",
                    "26",
                    "27"
                ],
                "complexity": "medium",
                "mode": "variants"
            }
        ]
    }];
async function insertSueqenceLevels() {
    const levels = levelsSueqenceJSON[0].levelFebs;
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
            await db_1.default.query(query, values);
            console.log(`Inserted level with id ${level.id}`);
        }
        catch (error) {
            console.error(`Error inserting level with id ${level.id}:`, error);
        }
    }
}
exports.default = insertSueqenceLevels;
