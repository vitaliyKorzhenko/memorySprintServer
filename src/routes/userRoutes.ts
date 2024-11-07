import { Router } from 'express';
import {
    createUser,
    disableUser,
    enableUser,
    findUserByEmail,
    findUserByPhone,
    getUsers,
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


export default router;
