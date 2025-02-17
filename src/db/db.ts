import * as mongoose from "mongoose";

const DB_URI = process.env.DB_URI!;

async function connectToDatabase(): Promise<void> {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

export { connectToDatabase };