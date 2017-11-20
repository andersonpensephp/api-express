import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
    id: 2,
    value: 300
}]));

export default router;