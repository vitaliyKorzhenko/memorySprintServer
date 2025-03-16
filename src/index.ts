/**
 * Main server configuration file for the Memory Sprint API
 * Sets up Express server with middleware, routes, and database connection
 */

import express, { Application } from 'express';
import levelsRoutes from './routes/levelsRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import userRoutes from './routes/userRoutes';
import apiKeyMiddleware from './apiMiddleware';
import levelNumberSequenceRoute from './routes/levelNumberSequenceRoute';
import numberGrid33Route from './routes/numberGrid33Route';
import levelRebusRoute from './routes/levelRebusRoute';
import levelShapeSelection from "./routes/levelShapeSelectionRoute";
import { connectToDatabase } from "./db/db";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import roundRoutes from "./routes/roundRoutes";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4000;

// Configure middleware
app.use(express.json()); // Parse JSON request bodies

// Setup Swagger documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Apply API key authentication middleware to all /api routes
app.use('/api', apiKeyMiddleware);

// Configure API routes
app.use('/api', levelsRoutes);
app.use('/api', userRoutes);
app.use('/api', feedbackRoutes);
app.use('/api/levelNumberSequence', levelNumberSequenceRoute);
app.use('/api/numberGrid33', numberGrid33Route);
app.use('/api/levelShapeSelection', levelShapeSelection);
app.use('/api/levelRebus', levelRebusRoute);
app.use('/api/rounds', roundRoutes);

/**
 * Initialize and start the server
 * Connects to database and starts listening on specified port
 */
const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();
