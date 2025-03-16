import Round from "../models/round.model";
import { Request, Response } from 'express';

//Получить все раунды

export const getAllRounds = async (req: Request, res: Response) => {
    try {
        const rounds = await Round.find();

        res.status(200).json(rounds);
    } catch (e: any) {
        res.status(500).json({ message: e.message });
    }
}

// Получить раунды по типу
export const getRoundsByType = async (req: Request, res: Response) => {
    try {
        const { type } = req.params;

        const rounds = await Round.find({ type });

        res.status(200).json(rounds);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

//Получить раунды по сложности
export const getRoundsByComplexity = async (req: Request, res: Response) => {
    try {
        const { complexity } = req.params;
        const rounds = await Round.find({ complexity });
        res.status(200).json(rounds);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Генерация раундов с разными типами
export const generateRounds = async (req: Request, res: Response) => {
    try {
        const { complexity } = req.params;
        const rounds = await Round.aggregate([
            { $match: { complexity } },
            { $sample: { size: 15 } }
        ]);
        res.status(200).json(rounds.slice(0, 15));
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Получить раунд по ID
export const getRoundById = async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const round = await Round.findOne({ id: Number(id) });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return
        }
        res.status(200).json(round);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Получить правильный ответ для раунда по ID
export const getCorrectAnswer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const round = await Round.findOne({ id: Number(id) });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return
        }
        res.status(200).json({ correctAnswer: round.answer });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createRound = async (req: Request, res: Response) => {
    try {
        const {
            id,
            type,
            sequence,
            answer,
            point,
            headerEn,
            headerUa,
            options,
            complexity,
            mode,
            variants
        } = req.body;

        const existingRound = await Round.findOne({ id });
        if (existingRound) {
            res.status(400).json({ message: 'Round with this ID already exists' });
            return
        }

        const newRound = new Round({
            id,
            type,
            sequence,
            answer,
            point,
            headerEn,
            headerUa,
            options,
            complexity,
            mode,
            variants
        });

        await newRound.save();

        res.status(201).json(newRound);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
