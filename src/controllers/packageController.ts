import { Request, Response } from 'express'; // Import types
import pool from '../config/db';

const tablePackage = 'packages';

const tablePackageLevels = 'package_levels';

//get all packages

export const getPackages = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await pool.query(`SELECT * FROM ${tablePackage}`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get packages error' });
    }
}

