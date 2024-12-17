// src/server.ts
import express from 'express';
import levelsRoutes from './routes/levelsRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes'
import apiKeyMiddleware from './apiMiddleware';
import levelNumberSequenceRoute from './routes/levelNumberSequenceRoute';
import numberGrid33Route from './routes/numberGrid33Route';


const app = express();
const PORT = process.env.PORT || 3000;


app.use('/api', apiKeyMiddleware); // Проверка API-ключа для всех маршрутов под /api



// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect the routes
app.use('/api', levelsRoutes); // Add API prefix for routes

app.use('/api', userRoutes); //add APi user

app.use('/api', feedbackRoutes);

app.use('/api/levelNumberSequence', levelNumberSequenceRoute); // Add API prefix for routes
app.use('/api/numberGrid33', numberGrid33Route)


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

    console.log(`Server started on  ${PORT}`);
     try {
        //await insertInitialData();
     } catch (error) {
      console.error('Error inserting initial data:', error);
     } 
   
});
