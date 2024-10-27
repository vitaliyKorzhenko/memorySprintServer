import { Router } from 'express';
import { findAllLevelProgresses, createLevelProgress, getAllLevels, getLevelById, findProgressByUserId, findUserInfo } from '../controllers/levelController';

const router = Router();

// Define routes
router.get('/levels', getAllLevels);        // Route to get all levels
router.get('/levels/:id', getLevelById);    // Route to get a level by ID

//add all new routes here
router.post('/allLevelProgress', findAllLevelProgresses);        // Route to get all level progresses

//create level progress
router.post('/createLevelProgress', createLevelProgress);        // Route to create level progress

//find user info

router.post('/findProgressByUserId', findProgressByUserId);        // Route to find user info

//find user info

router.post('/findInfo', findUserInfo);        // Route to find user info



export default router;
