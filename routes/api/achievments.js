import express from 'express';
const router = express.Router();
// import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
    console.log('Get them Chevos');
    res.send('Get Them Chevos');
});

export default router;