import { Router } from "express";

import {
    createLevel,
    findById,
    getLevels,
} from "../controllers/numberGrid22Controller";

const router = Router();

// Define routes

router.get("/", getLevels); // Route to get all levels

router.post("/create", createLevel); // Route to get all levels

//find by id

router.post("/findById", findById); // Route to get all levels

export default router;
