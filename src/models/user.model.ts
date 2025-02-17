import { Schema, model } from "mongoose";
import { IUser } from "../types/user.types";


const UserSchema = new Schema<IUser>(  {
            email: { type: String, required: true, unique: true },
            nickname: { type: String, required: true, unique: true },
            phone: { type: String, default: "" },
            age: { type: Number, required: true },
            points: { type: Number, default: 0 },
            isActive: { type: Boolean, default: true }
    },
    { timestamps: { createdAt: "created_at" } }
);

const User = model("User", UserSchema);

export default User;


