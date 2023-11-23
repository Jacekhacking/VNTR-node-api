import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
    console.log('Show all Chevos');
    const statement = 'SELECT * FROM achievements';
    const result = await query(statement);

    res.send(result.rows);
});

router.get('/:id', async (req, res) => {
    console.log(`Show only ${req.params.id} Chevo`);
    const achievement_id = req.params.id;
    const statement = 'SELECT * FROM achievements WHERE id = $1';
    const result = await query(statement, [achievement_id]);

    res.send(result.rows[0]);
});

router.post('/', async (req, res) => {
    console.log('Create new Chevo');
    const { title, description, image } = req.body;
    const statement = 'INSERT INTO achievements (title, description, image) VALUES ($1, $2, $3)';
    const result = await query(statement, [title, description, image]);

    res.send(result.rows);
});
  
router.put('/:id', async (req, res) => {
    console.log(`Update chevo id: ${req.params.id}`);
    const achievement_id = req.params.id;
    const { title, description, image } = req.body;
    const statement = 'UPDATE achievements SET title = $1, description = $2, image = $3 WHERE id = $4';
    const result = await query(statement, [title, description, image, achievement_id]);

    res.send(result.rows[0])
});
  
router.delete('/:id', async (req, res) => {
    console.log(`Delete Chevo id: ${req.params.id}`);
    const achievement_id = req.params.id;
    const statement = 'DELETE FROM achievements WHERE id = $1';
    const result = await query(statement, [achievement_id])

    res.send(result.rows)
});

export default router;