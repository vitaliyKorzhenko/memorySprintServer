// src/server.ts
import express from 'express';
import { getUsers } from './controllers/userController';
import levelsRoutes from './routes/levelsRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import insertLevels from './db/levelsSeed';
import seedUsers from './db/userSeed';
import userRoutes from './routes/userRoutes'
import apiKeyMiddleware from './apiMiddleware';


const app = express();
const PORT = process.env.PORT || 3000;


app.use('/api', apiKeyMiddleware); // Проверка API-ключа для всех маршрутов под /api



// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect the routes
app.use('/api', levelsRoutes); // Add API prefix for routes

app.use('/api', userRoutes); //add APi user

app.use('/api', feedbackRoutes);


//one try
const insertInitialData = async () => {
   await seedUsers();
   await insertLevels();
  };

app.listen(PORT, async () => {
  console.log(`Server started on  ${PORT}`);

    // await insertInitialData();
});
