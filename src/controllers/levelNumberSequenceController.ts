//work with table level_number_sequence

import { Request, Response } from 'express';

import pool from '../config/db';


//getl all levels

export const getLevels = async (req: Request, res: Response): Promise<void> => {
    try {
        const allLevels = await pool.query('SELECT * FROM level_number_sequence');
        res.status(200).json(allLevels.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving levels' });
    }
};


//create new level

export const createLevel = async (req: Request, res: Response): Promise<void> => {
    const { sequence, answer, options } = req.body;

    try {
        if (!sequence) {
            res.status(400).json({ message: 'sequence is required' });
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
        //transfrom array number to string with separator ','
        let currentSequence = sequence.join(',');
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
            'INSERT INTO level_number_sequence (sequence, answer, options, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [currentSequence, answer, currentOptions, points, header_ua, header_en, header_sp, hint_ua, hint_en, hint_sp, complexity]
        );
        res.status(200).json({ newLevel: newLevel.rows[0] });
        return;

        // res.status(201).json(newLevel.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
};

//find by id

export const findById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    try {
        if (!id) {
            res.status(400).json({ message: 'id is required' });
            return;
        }

        const level = await pool.query('SELECT * FROM level_number_sequence WHERE id = $1', [id]);
        res.status(200).json(level.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error retrieving level' });
    }
}
