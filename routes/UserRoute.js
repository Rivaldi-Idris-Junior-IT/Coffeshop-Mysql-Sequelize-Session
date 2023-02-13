import express from "express";
import {
    getUsers,
    getUserById,
    createUser2,
    updateUser,
    deleteUser
} from "../controller/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser2);
router.patch('/users/:uuid', updateUser);
router.delete('/users/:uuid', deleteUser);

export default router;