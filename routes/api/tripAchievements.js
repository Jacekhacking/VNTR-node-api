import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
    console.log('Show all Trip Chevos');
    const statement = 
        'SELECT ta.id, t.trip_name, a.title FROM tripAchievements ta \
        JOIN trips t ON t.id = ta.trip_id \
        JOIN achievements a ON a.id = ta.achievement_id';
    const result = await query(statement);
    console.log(result.rows)

    res.send(result.rows);
});

router.post('/', async (req, res) => {
    console.log('Create new Trip Chevo');
    const { trip_id, achievement_id } = req.body;
    const statement = 'INSERT INTO tripAchievements (trip_id, achievement_id) VALUES ($1, $2)';
    const result = await query(statement, [trip_id, achievement_id]);
    
    res.send(result.rows);
});

router.get('/:id', async (req, res) => {
    console.log('Show one Trip - all Chevos');
    const trip_id = req.params.id;
    const statement =
        'SELECT ta.id, t.trip_name, a.title FROM tripAchievements ta \
        JOIN trips t ON t.id = ta.trip_id \
        JOIN achievements a ON a.id = ta.achievement_id \
        WHERE ta.trip_id = $1';
    const result = await query(statement, [trip_id]);
    console.log(result.rows)

    res.send(result.rows);
});

export default router;