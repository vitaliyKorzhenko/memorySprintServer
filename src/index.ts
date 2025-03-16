// src/server.ts
import express from 'express';
import levelsRoutes from './routes/levelsRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes'
import apiKeyMiddleware from './apiMiddleware';
import levelNumberSequenceRoute from './routes/levelNumberSequenceRoute';

import numberGrid33Route from './routes/numberGrid33Route';
import levelRebusRoute from './routes/levelRebusRoute';
import levelShapeSelection from "./routes/levelShapeSelectionRoute";
import {connectToDatabase} from "./db/db";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "../swagger";
import roundRoutes from "./routes/roundRoutes";
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use('/api', apiKeyMiddleware); // Проверка API-ключа для всех маршрутов под /api

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect the routes
app.use('/api', levelsRoutes); // Add API prefix for routes

app.use('/api', userRoutes); //add APi user

app.use('/api', feedbackRoutes);

app.use('/api/levelNumberSequence', levelNumberSequenceRoute); // Add API prefix for routes

app.use('/api/numberGrid33', numberGrid33Route)

app.use('api/levelShapeSelection', levelShapeSelection);

//rebus level route
app.use('/api/levelRebus', levelRebusRoute); // Add API prefix for routes

app.use('/api/rounds', roundRoutes);

//one try
const insertInitialData = async () => {
  //insert your seed functions here (for one try)

  //  await seedUsers();
  //  await insertLevels();
  //  await insertSueqenceLevels();
  try {
    //await insertNumberGridLevels();

    //await insertLevelPackage();
  } catch (error) {
    
  }

  };

app.listen(PORT, async () => {

     try {
        console.log(`Server started on  ${PORT}`);
        //await insertInitialData();
         await connectToDatabase()
     } catch (error) {
      console.error('Error inserting initial data:', error);
     } 
   
});
