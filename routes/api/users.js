import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
  console.log('Get all users');
  const statement = 'SELECT * FROM users';
  const result = await query(statement);

  res.send(result.rows);
});

router.post('/', async (req, res) => {
  console.log('Create new user');
  const { first_name, last_name } = req.body;
  const statement = 'INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *';
  const result = await query(statement, [first_name, last_name]);

  res.send(result.rows);
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
