import * as mongoose from "mongoose";

export interface ICompletedExercise {
    exerciseId: number;
    score: number;
    completedAt?: Date;
}

interface IIncompleteExercise {
    exerciseId: number;
    progress: number;
}

interface IProgress {
    completedExercises: ICompletedExercise[],
    incompleteExercises: IIncompleteExercise[],
    totalScore: number,
}

export interface IUser {
    email: string;
    nickname: string;
    phone?: string;
    age: number;
    points?: number;
    isActive?: boolean;
    createdAt?: Date;
    progress?: IProgress;
}
