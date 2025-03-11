// src/controllers/userController.ts
import { Request, Response } from 'express'; // Импортируем типы
import User from "../models/user.model";
import {ICompletedExercise} from "../types/user.types";
import Round from "../models/round.model";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {

      const users = await User.find({}, null, {lean: true, projection: undefined});

      res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ошибка получения данных' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }

    if (!req.body.nickname) {
        res.status(400).json({ message: 'nickname is required' });
        return;
    }

    if (!req.body.age) {
        res.status(400).json({ message: 'age is required' });
        return;
    }

    const { email, phone, age, nickname } = req.body;

    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { nickname }],
        }, null, {lean: true, projection: undefined});

        if (existingUser) {
            if (existingUser?.email === email) {
                res.status(400).json({ message: 'Email is already taken' });
                return;
            }
            if (existingUser?.nickname === nickname) {
                res.status(400).json({ message: 'Nickname is already taken' });
                return;
            }
        }

        const newUser = new User({
            email,
            nickname,
            phone: phone || '',
            age,
            points: 0,
            isActive: true,
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'create error' });
    }
};


//disable user by id

export const disableUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { _id } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { isActive: false },
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(updatedUser)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'disable error' });
    }
};

//enable user by id

export const enableUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { _id } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { isActive: true },
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(updatedUser)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'enable error' });
    }
};

//get user info by email

export const findUserByEmail = async (
    req: Request,
    res: Response
): Promise<void> => {

    if (!req.body.email) {
        res.status(400).json({ message: 'email is required' });
        return;
    }

    const { email } = req.body;

    try {

        const user = await User.findOne({email}, null, {lean: true, projection: undefined})

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by email error' });
    }
};

//get user info by phone

export const findUserByPhone = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { phone } = req.body;

    try {
        const user = await User.findOne({phone}, null, {lean: true, projection: undefined})

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'get user by phone error' });
    }
};

// Добавление прогресса (завершение задания)
export const addCompleteExercise = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, roundId } = req.params;

        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        const round = await Round.findOne({ id: roundId });
        if (!round) {
            res.status(404).json({ message: 'Round not found' });
            return
        }

        const isExerciseExists = user.progress.completedExercises.some(
            (ex) => ex.exerciseId === round?.id // Сравниваем числа
        );


        if (isExerciseExists) {
            res.status(400).json({ message: "Exercise already exists in complete exercises" });
            return;
        }

        user.progress.completedExercises.push({
            exerciseId: round.id,
            score: round.point,
        });

        user.progress.totalScore += round.point;

        await user.save();

        res.status(200).json({ message: "Progress added successfully", user });

    } catch (error) {
        res.status(500).json({ message: "Error adding progress", error });
    }
};

export const addIncompleteExercise = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { exerciseId, progress } = req.body;

        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        const isExerciseExists = user.progress.incompleteExercises.some(
            (ex) => ex.exerciseId === exerciseId
        );

        if (isExerciseExists) {
            res.status(400).json({ message: "Exercise already exists in incomplete exercises" });
            return;
        }

        user.progress.incompleteExercises.push({
            exerciseId,
            progress: progress || 0, // Если progress не передан, по умолчанию 0
        });

        await user.save();

        res.status(200).json({ message: "Incomplete exercise added successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error adding incomplete exercise", error });
    }
};

export const removeIncompleteExercise = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, exerciseId } = req.params;

        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }


        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        const taskIndex = user.progress.incompleteExercises.findIndex(
            (ex) => ex.exerciseId === +exerciseId
        );

        if (taskIndex === -1) {
            res.status(404).json({ message: "Task not found in incomplete exercises" });
            return;
        }

        user.progress.incompleteExercises.splice(taskIndex, 1);

        await user.save();

        res.status(200).json({ message: "Task removed from incomplete exercises successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error removing task from incomplete exercises", error });
    }
};

export const getCompletedExercises = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        res.status(200).json(user.progress.completedExercises);
    } catch (error) {
        res.status(500).json({ message: "Error fetching completed exercises", error });
    }
};

export const getIncompleteExercises = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        res.status(200).json(user.progress.incompleteExercises);
    } catch (error) {
        res.status(500).json({ message: "Error fetching incomplete exercises", error });
    }
};

export const getIncompleteExerciseById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, exerciseId } = req.params;

        const user = await User.findById(id).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (!user.progress) {
            user.progress = { completedExercises: [], incompleteExercises: [], totalScore: 0 };
        }

        const exercise = user.progress.incompleteExercises.find(
            (ex) => ex.exerciseId.toString() === exerciseId
        );

        if (!exercise) {
            res.status(404).json({ message: "Incomplete exercise not found" });
            return;
        }

        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json({ message: "Error fetching incomplete exercise", error });
    }
};
