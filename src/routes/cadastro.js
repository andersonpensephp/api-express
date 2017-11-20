import express from 'express';
import UsersControllers from '../controllers/users';
import mongoOp from '../models/mongo';

const router = express.Router();

const usersControllers = new UsersControllers();

router.post('/', (req, res) => usersControllers.post(req, res));

export default router;
