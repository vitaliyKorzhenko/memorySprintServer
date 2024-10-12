import { Request, Response } from 'express';
import pool from '../config/db';
// Get all levels
export const getAllLevels = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM levels'); // Query to select all levels
    res.status(200).json(result.rows); // Send the retrieved levels as JSON
  } catch (error) {
    console.error('Error retrieving levels:', error); // Log any errors
    res.status(500).json({ error: 'Internal server error' }); // Send a 500 status with an error message
  }
};

// Get a level by ID
export const getLevelById = async (req: Request, res: Response) => {
  const { id } = req.params; // Extract the ID from the request parameters

  try {
    const result = await pool.query('SELECT * FROM levels WHERE id = $1', [id]); // Query to select level by ID

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]); // If level found, send it as JSON
    } else {
      res.status(404).json({ message: 'Level not found' }); // If not found, send a 404 status with a message
    }
  } catch (error) {
    console.error('Error retrieving level:', error); // Log any errors
    res.status(500).json({ error: 'Internal server error' }); // Send a 500 status with an error message
  }
};
