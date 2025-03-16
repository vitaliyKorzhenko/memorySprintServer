"use strict";
/**
 * Main server configuration file for the Memory Sprint API
 * This file sets up the Express server with all necessary middleware and routes
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const levelsRoutes_1 = __importDefault(require("./routes/levelsRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const apiMiddleware_1 = __importDefault(require("./apiMiddleware"));
const levelNumberSequenceRoute_1 = __importDefault(require("./routes/levelNumberSequenceRoute"));
const numberGrid33Route_1 = __importDefault(require("./routes/numberGrid33Route"));
const levelRebusRoute_1 = __importDefault(require("./routes/levelRebusRoute"));
const levelShapeSelectionRoute_1 = __importDefault(require("./routes/levelShapeSelectionRoute"));
const db_1 = require("./db/db");
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger")); // Fixed import path
const roundRoutes_1 = __importDefault(require("./routes/roundRoutes"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4000;
// Middleware setup
app.use(express_1.default.json()); // Enable JSON parsing
// API Documentation setup
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// API Key middleware for protected routes
app.use('/api', apiMiddleware_1.default);
// Route configurations
app.use('/api', levelsRoutes_1.default);
app.use('/api', userRoutes_1.default);
app.use('/api', feedbackRoutes_1.default);
app.use('/api/levelNumberSequence', levelNumberSequenceRoute_1.default);
app.use('/api/numberGrid33', numberGrid33Route_1.default);
app.use('/api/levelShapeSelection', levelShapeSelectionRoute_1.default); // Fixed path
app.use('/api/levelRebus', levelRebusRoute_1.default);
app.use('/api/rounds', roundRoutes_1.default);
/**
 * Function to insert initial data into the database
 * Currently disabled but can be used for seeding the database
 */
const insertInitialData = async () => {
    try {
        // Uncomment and implement these functions as needed
        // await seedUsers();
        // await insertLevels();
        // await insertSequenceLevels();
        // await insertNumberGridLevels();
        // await insertLevelPackage();
        console.log('Initial data insertion completed');
    }
    catch (error) {
        console.error('Error inserting initial data:', error);
    }
};
// Server initialization
const startServer = async () => {
    try {
        await (0, db_1.connectToDatabase)();
        // await insertInitialData(); // Uncomment if needed
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
