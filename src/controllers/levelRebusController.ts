//work with table level_number_sequence

import { Request, Response } from 'express';

import pool from '../config/db';


//getl all levels

const tableRebus = 'level_rebus';

export const getLevels = async (req: Request, res: Response): Promise<void> => {
   //use table name
    try {
        const allLevels = await pool.query(`SELECT * FROM ${tableRebus}`);
        res.status(200).json(allLevels.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving levels' });
    }
};


//create new level

export const createLevel = async (req: Request, res: Response): Promise<void> => {
    //rebus json
    const { rebus, answer, options } = req.body;
    //create new level using table name

    try {
        if (!rebus) {
            res.status(400).json({ message: 'rebus is required' });
            return;
        }
        if (!answer) {
            res.status(400).json({ message: 'answer is required' });
            return;
        }
        if (!options) {
            res.status(400).json({ message: 'options is required' });
            return;
        }
        //rebis is json 
        let currentRebus = rebus;
        //transfrom array options to string with separator ','
        let currentOptions = options.join(',');

        //points
        let points = req.body.points ? req.body.points : 5;
        //headers
        let header_ua = req.body.headerUA ? req.body.headerUA : '';
        let header_en = req.body.headerEN ? req.body.headerEN : '';
        let header_sp = req.body.headerSP ? req.body.header : '';
        //hints
        let hint_ua = req.body.hintUA ? req.body.hintUA : '';
        let hint_en = req.body.hintEN ? req.body.hintEN : '';
        let hint_sp = req.body.hintSP ? req.body.hintSP : '';
        //complexity
        let complexity = req.body.complexity ? req.body.complexity : 'medium';

        let newLevel = await pool.query(
            `INSERT INTO ${tableRebus} (rebus, answer, options, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
            [currentRebus, answer, currentOptions, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity]
        );

        res.status(200).json(newLevel.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
};

//find by id

export const findById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    //use table name
    try {
        const level = await pool.query(`SELECT * FROM ${tableRebus} WHERE id = $1`, [id]);
        res.status(200).json(level.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error finding level' });
    }
}
