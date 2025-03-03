import { Router } from 'express';
import {
    createUser,
    disableUser,
    enableUser,
    findUserByEmail,
    findUserByPhone,
    getUsers,
    addCompleteExercise,
    addIncompleteExercise,
    removeIncompleteExercise,
    getCompletedExercises,
    getIncompleteExerciseById, getIncompleteExercises
} from '../controllers/userController';

const router = Router();

// Define routes
router.get('/users', getUsers); // Route to get all levels

//create user
router.post('/createUser', createUser);

//disable user by id
router.post('/disableUser', disableUser);

//enable user by id
router.post('/enableUser', enableUser);

//findUserByEmail
router.post('/findUserByEmail', findUserByEmail);

//findUserByPhone
router.post('/findUserByPhone', findUserByPhone);

//addCompletedTasks
router.post('/user/:id/addCompleteExercise/', addCompleteExercise);
//addIncompleteTasks
router.post('/user/:id/addIncompleteExercise/', addIncompleteExercise);
//removeFromIncompleteTasks
router.delete('/user/:id/removeIncompleteExercise/:exerciseId', removeIncompleteExercise);
//getCompletedTasks
router.get("/user/:id/completed", getCompletedExercises);
//get incomplete tasks by id
router.get("/user/:id/incomplete/:exerciseId", getIncompleteExerciseById);
//get incomplete tasks
router.get("/user/:id/incomplete", getIncompleteExercises);


export default router;
