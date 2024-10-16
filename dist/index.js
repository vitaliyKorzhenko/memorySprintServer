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
const levelsSeed_1 = __importDefault(require("./db/levelsSeed"));
const userSeed_1 = __importDefault(require("./db/userSeed"));
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
//one try
const insertInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userSeed_1.default)();
    yield (0, levelsSeed_1.default)();
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server started on  ${PORT}`);
    // await insertInitialData();
}));
