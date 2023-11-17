import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
    console.log('Get them Chevos');
    const result = await query('SELECT * FROM achievements');
    console.log(result.rows);
    res.send(result.rows);
});

router.get('/:id', async (req, res) => {
    console.log(`Get single Chevos ${req.params.id}`);
    let achievementId = req.params.id;
    const result = await query(`SELECT * FROM achievements WHERE id = ${achievementId}`);
    console.log(result.rows);
    res.send(result.rows);
});

router.post('/', async (req, res) => {
    console.log('Create new Chevo');
});
  
router.put('/:id', async (req, res) => {
    console.log(`Update chevo id: ${req.params.id}`);
});
  
router.delete('/:id', async (req, res) => {
    console.log(`Delete chevo id: ${req.params.id}`);
});

export default router;