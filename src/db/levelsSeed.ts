import { Pool } from 'pg';
import { LevelMain, LevelMode, LevelType, NumberGrid33Level, NumberSequenceLevel, RebusLevel, ShapeSelectionLevel } from '../typesFront';
import pool from '../config/db';


export const levels14Plus: LevelMain[] = [
    {
        id: 1,
        date: '2024-10-09',
        type: LevelType.NUMBER_SEQUENCE,
        sequence: [0, 3, 8, 15],          // Example sequence
        answer: 24,  
        options: ['24', '18', '21', '36'],
        mode: LevelMode.VARIANTS                         // Correct answer for the sequence
        // Correct answer for the sequence
      } as NumberSequenceLevel,
       {
        id: 2,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
        rebus: {
          lines: [
            { shapes: [{ type: 'circle', count: 2 }, { type: 'triangle', count: 1 }], result: 3 }, // 2 circles + 1 triangle = 3
            { shapes: [{ type: 'square', count: 1 }, { type: 'circle', count: 1 }], result: 6 },   // 1 square + 1 circle = 2
            { shapes: [{ type: 'circle', count: 3 }], result: 3 }                                // 3 circles = 3
          ]
        },
        question: 'How many circles?',
        correctAnswer: 5,
        hint: 'Count the circles in all lines!',
        options: ['3', '5', '4', '6']
      } as RebusLevel,
      {
        id: 3,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
        rebus: {
          lines: [
            { shapes: [{ type: 'square', count: 1 }, { type: 'triangle', count: 1 }], result: 7 }, // 1 square + 1 triangle = 2
            { shapes: [{ type: 'triangle', count: 1 }, { type: 'circle', count: 1 }], result: 7 }, // 2 triangles + 1 circle = 3
            { shapes: [{ type: 'square', count: 2 }, { type: 'circle', count: 3 }], result: 25 }, // 2 squares + 3 circles = 5

          ]
        },
        question: 'How many shapes in total?',
        correctAnswer: 10,
        hint: 'Count all the shapes in all lines!',
        options: ['9', '10', '8', '11']
      } as RebusLevel,
      {
        id: 4,
        date: '2024-10-10',
        type: LevelType.REBUS,
        mode: LevelMode.VARIANTS,
        rebus: {
          lines: [
            { shapes: [{ type: 'circle', count: 2 }, { type: 'square', count: 2 }], result: 18 }, // 4 circles + 3 squares = 7
            { shapes: [{ type: 'triangle', count: 1 }, { type: 'circle', count: 2 }], result: 13 }, // 5 triangles + 2 circles = 7
            { shapes: [{ type: 'square', count: 2 }, { type: 'triangle', count: 1 }], result: 15 } // 2 squares + 4 triangles = 6
          ]
        },
        question: 'How many triangles?',
        correctAnswer: 11,
        hint: 'Count the triangles in all lines!',
        options: ['2', '6', '3', '5']
      } as RebusLevel,
      {
        id: 5,
        date: '2024-10-09',
        type: LevelType.NUMBER_GRID33,
        sequence: [3, 2, 3, 4, 3, 4, 5, 6, ''],
        answer: 24,  
        options: ['2', '3', '4', '5'],
        mode: LevelMode.VARIANTS                         // Correct answer for the sequence
        // Correct answer for the sequence
      } as NumberGrid33Level,
      {
        id: 6,
        date: '2024-10-09',
        type: LevelType.SHAPE_SELECTION,
        answer: 2,  
        options: ['1', '2', '3', '4'],
        mode: LevelMode.VARIANTS,
        shapes: [
      
            { id: 1, type: 'star', color: '#FF6347', isFill: true },        // Red star
            { id: 2, type: 'heart', color: '#32CD32', isFill: true },     // Green heart
            { id: 3, type: 'triangle', color: '#FF6347', isFill: false },    // Red triangle (outline)
            { id: 4, type: 'cross', color: '#32CD32', isFill: true },     // Green cross
          
          
          
        ]
                                 // Correct sequence answer
        // Correct answer for the sequence
      } as ShapeSelectionLevel
     ];

async function insertLevels() {
  for (const level of levels14Plus) {
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

      await pool.query(query, values);
      console.log(`Inserted level with id ${level.id}`);
    } catch (error) {
      console.error(`Error inserting level with id ${level.id}:`, error);
    }
  }
}

export default insertLevels;

