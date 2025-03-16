import { Schema, model } from "mongoose";
import { IUser } from "../types/user.types";

const ProgressSchema = new Schema({
    completedExercises: [
        {
            exerciseId: { type: Number, required: true, },
            score: { type: Number, default: 0 },
            completedAt: { type: Date, default: Date.now },
        },
    ],
    incompleteExercises: [
        {
            exerciseId: { type: Number, required: true, },
            progress: { type: Number, default: 0 }, // Completion percentage (0-100)
        },
    ],
    totalScore: { type: Number, default: 0 },
});



const UserSchema = new Schema<IUser>(  {
            email: { type: String, required: true, unique: true },
            nickname: { type: String, required: true, unique: true },
            phone: { type: String, default: "" },
            age: { type: Number, required: true },
            points: { type: Number, default: 0 },
            isActive: { type: Boolean, default: true },
            progress: { type: ProgressSchema, default: () => ({ completedExercises: [], incompleteExercises: [], totalScore: 0 }) },
    },
    { timestamps: { createdAt: "created_at" } }
);

const User = model("User", UserSchema, "users");

export default User;


