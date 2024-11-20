"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const levelsRoutes_1 = __importDefault(require("./routes/levelsRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const apiMiddleware_1 = __importDefault(require("./apiMiddleware"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/api', apiMiddleware_1.default); // Проверка API-ключа для всех маршрутов под /api
// Middleware
app.use(express_1.default.json()); // Parse JSON request bodies
// Connect the routes
app.use('/api', levelsRoutes_1.default); // Add API prefix for routes
app.use('/api', userRoutes_1.default); //add APi user
app.use('/api', feedbackRoutes_1.default);
//one try
const insertInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    //insert your seed functions here (for one try)
    //  await seedUsers();
    //  await insertLevels();
    //  await insertSueqenceLevels();
    try {
        //await insertNumberGridLevels();
        //await insertLevelPackage();
    }
    catch (error) {
    }
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server started on  ${PORT}`);
    try {
        yield insertInitialData();
    }
    catch (error) {
        console.error('Error inserting initial data:', error);
    }
}));
