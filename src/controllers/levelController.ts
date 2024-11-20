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



//progress section 



// Get all level progresses
export const findAllLevelProgresses = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM level_progress');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving level progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get level progress by ID
export const findLevelProgressById = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const result = await pool.query('SELECT * FROM level_progress WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Level progress not found' });
    }
  } catch (error) {
    console.error('Error retrieving level progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create new level progress
export const createLevelProgress = async (req: Request, res: Response) => {
  console.warn('CREATE LEVEL PROGRESS', req.body);
  const { user_id, level_id, status, attempts, point } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO level_progress (user_id, level_id, status, attempts, point,  created_at) VALUES ($1, $2, $3, $4, $5, now()) RETURNING *',
      [user_id, level_id, status, attempts, point]
    );

    await pool.query(
      'UPDATE users SET points = points + $1 WHERE id = $2',
      [point, user_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating level progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update level progress by ID
export const updateLevelProgress = async (req: Request, res: Response) => {
  const { id } = req.body;
  const { status, attempts, point, isActive } = req.body;

  try {
    const previousResult = await pool.query('SELECT point, user_id FROM level_progress WHERE id = $1', [id]);
    if (previousResult.rows.length === 0) {
      return res.status(404).json({ message: 'Level progress not found' });
    }

    const previousPoint = previousResult.rows[0].point;
    const userId = previousResult.rows[0].user_id;

    const result = await pool.query(
      'UPDATE level_progress SET status = $1, attempts = $2, point = $3, isActive = $4 WHERE id = $5 RETURNING *',
      [status, attempts, point, isActive, id]
    );

    await pool.query(
      'UPDATE users SET points = points - $1 + $2 WHERE id = $3',
      [previousPoint, point, userId]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error updating level progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete level progress by ID
export const deleteLevelProgress = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const previousResult = await pool.query('SELECT point, user_id FROM level_progress WHERE id = $1', [id]);
    if (previousResult.rows.length === 0) {
      return res.status(404).json({ message: 'Level progress not found' });
    }

    const previousPoint = previousResult.rows[0].point;
    const userId = previousResult.rows[0].user_id;

    const result = await pool.query('DELETE FROM level_progress WHERE id = $1 RETURNING *', [id]);

    await pool.query(
      'UPDATE users SET points = points - $1 WHERE id = $2',
      [previousPoint, userId]
    );

    res.status(200).json({ message: 'Level progress deleted successfully' });
  } catch (error) {
    console.error('Error deleting level progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all users who attempted a specific level
export const findUsersByLevelId = async (req: Request, res: Response) => {
  const { level_id } = req.body;

  try {
    const result = await pool.query('SELECT * FROM level_progress WHERE level_id = $1', [level_id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving users by level ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get progress for a specific user
export const findProgressByUserId = async (req: Request, res: Response) => {
  const { user_id, ageType } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM level_progress lp INNER JOIN levels l ON lp.level_id = l.id WHERE lp.user_id = $1 AND l.ageType = $2',
      [user_id, ageType]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving progress by user ID and ageType:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get user information and progress history by email and ageType



//find user info

export const findUserInfo = async (req: Request, res: Response) => {
  const { email, ageType } = req.body;

  try {
    const result = await pool.query(
      `SELECT u.id, u.name, u.email
      FROM users u
      WHERE u.email = $1`,
      [email]
    );
    
  
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const progress = await pool.query(
        `SELECT lp.*, l.title
        FROM level_progress lp
        INNER JOIN levels l ON lp.level_id = l.id
        WHERE lp.user_id = $1 AND l.ageType = $2`,
        [user.id, ageType]
      );
      res.status(200).json({ user, progress: progress.rows });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error retrieving user info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



//find random level where type = number_sequence and not in progress  (user_id and level_type)



export const findRandomLevel = async (req: Request, res: Response): Promise<void> => {
  const { user_id, level_type } = req.body;

  try {
    if (!user_id) {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }
    if (!level_type) {
      res.status(400).json({ message: 'Level type is required' });
      return;
    }

    const result = await pool.query(
      `SELECT l.*
       FROM levels l
       WHERE l.type = $1
         AND l.id NOT IN (
           SELECT level_id
           FROM level_progress
           WHERE user_id = $2
         )
       ORDER BY RANDOM()
       LIMIT 1`,
      [level_type, user_id]
    );

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(200).json({ message: 'No levels found' });
    }
  } catch (error) {
    console.error('Error retrieving random level:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//get level_package by id 

export const getLevelPackageById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM level_package WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Level package not found' });
    }
  } catch (error) {
    console.error('Error retrieving level package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




//create level_package

