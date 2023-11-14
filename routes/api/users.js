import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
  console.log('Get all users');
  const result = await query('SELECT * FROM user_name;');
  console.log(result.rows);
  res.send(result.rows);
});

router.post('/create', async (req, res) => {
  console.log('login user');
  const text =
    'INSERT INTO user_name(first_name, last_name) VALUES ($1, $2) RETURNING *';
  const values = ['Jacek', 'Hacking'];
  const result = await query(text, values);

  res.send('login route');
});

router.post('/signup', async (req, res) => {
  console.log(req.body);
  res.send('create new user');
});

router.delete('/:id', async (req, res) => {
  console.log('Delete user by id');
});

// Export router
export default router;
