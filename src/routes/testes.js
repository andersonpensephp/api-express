import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
    id: 1,
    name: 'ANDERSON REIS SOUTO'
}]));

export default router;
