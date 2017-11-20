import express from 'express';
import UsersControllers from '../controllers/users';

const router = express.Router();

const usersControllers = new UsersControllers();

router.get('/', (req, res) => usersControllers.get(req, res));

export default router;
