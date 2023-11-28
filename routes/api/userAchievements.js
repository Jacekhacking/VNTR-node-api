import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
    console.log('Show all User Chevos');
    const statement = 
        'SELECT ua.id, u.first_name, u.last_name, t.trip_name, a.title FROM userAchievements ua \
        JOIN users u ON u.id = ua.user_id \
        JOIN trips t ON t.id = ua.trip_id \
        JOIN achievements a ON a.id = ua.achievement_id';
    const result = await query(statement);
    console.log(result.rows)

    res.send(result.rows);
});

router.post('/', async (req, res) => {
    console.log('Create new User Chevo');
    const { user_id, achievement_id, trip_id } = req.body;
    const statement = 'INSERT INTO userAchievements (user_id, achievement_id, trip_id) VALUES ($1, $2, $3)';
    const result = await query(statement, [user_id, achievement_id, trip_id]);
    
    res.send(result.rows);
});

router.get('/:id', async (req, res) => {
    console.log('Show one User - all Chevos');
    const user_id = req.params.id;
    const statement =
        'SELECT ua.id, u.first_name, u.last_name, t.trip_name, a.title FROM userAchievements ua \
        JOIN users u ON u.id = ua.user_id \
        JOIN trips t ON t.id = ua.trip_id \
        JOIN achievements a ON a.id = ua.achievement_id \
        WHERE ua.user_id = $1';
    const result = await query(statement, [user_id]);
    console.log(result.rows)

    res.send(result.rows);
});

export default router;