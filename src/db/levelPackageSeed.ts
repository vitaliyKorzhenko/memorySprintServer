import pool from "../config/db";
import { LevelType } from "../typesFront";

async function insertLevelPackage() {

    const packageData = {
        levels: [
            {
                id: 19,
                type: LevelType.NUMBER_SEQUENCE,
            },
            {
                id: 80,
                type: LevelType.NUMBER_GRID33,
            }, 
            {
                id: 21,
                type: LevelType.NUMBER_SEQUENCE,
            },
            {
                id: 80,
                type: LevelType.NUMBER_GRID33
            },
            {
                id: 81,
                type: LevelType.NUMBER_GRID33
            }
        ],
    }
    const levelPackage = {
        category: 'dailyPackage',
        data: JSON.stringify(packageData)
    }
   
      try {
        const query = `
          INSERT INTO level_package (category, data)
          VALUES ($1, $2)
        `;
  
        const values = [
             levelPackage.category,
            levelPackage.data     
        ];
  
        await pool.query(query, values);
        //console.log(`Inserted level with id ${level.id}`);
      } catch (error) {
        console.error(`Error inserting level with id `, error);
      }
    }
  
  export default insertLevelPackage;