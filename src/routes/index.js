import express from 'express';
import mongoOp from '../models/mongo';

import usersRouter from './users';
import cadastroRouter from './cadastro';
import productsRouter from './products';
import testesRouter from './testes';
import other from './others';

const router = express.Router();


router.use('/', usersRouter);
router.use('/cadastro', cadastroRouter);
router.use('/products', productsRouter);
router.use('/testes', testesRouter);
router.use('/others', other);

export default router;
