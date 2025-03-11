import {Router} from 'express';
import {
    createRound,
    generateRounds,
    getAllRounds, getCorrectAnswer,
    getRoundById,
    getRoundsByComplexity,
    getRoundsByType
} from "../controllers/round.controller";

const router = Router();

router.get('/', getAllRounds);

router.get("/:type", getRoundsByType);

router.get("/complexity/:complexity", getRoundsByComplexity);

router.get("/generate/:complexity", generateRounds);

router.get('/get/:id', getRoundById)

router.get('/:id/correct-answer', getCorrectAnswer)

router.post('/create', createRound)

export default router;