import express from 'express';
import ProductsControllers from '../controllers/products';

const router = express.Router();

const productsControllers = new ProductsControllers();

router.get('/', (req, res) => productsControllers.get(req, res));

export default router;
