import express from 'express';
const router = express.Router();
import { query } from '../../db/index.js';

router.get('/', async (req, res) => {
  console.log('Get all trips');
  const statement = 'SELECT * FROM trips';
  const result = await query(statement);

  res.send(result.rows);
});

router.get('/:id', async (req, res) => {
  console.log('get single trip');
});

router.post('/', async (req, res) => {
  console.log('create single trip');
  const { trip_name } = req.body;
  const statement = 'INSERT INTO trips (trip_name) VALUES ($1)';
  const result = await query(statement, [trip_name]);

  res.send(result.rows);
});

router.put('/:id', async (req, res) => {
  console.log('update single trip');
});

router.delete('/:id', async (req, res) => {
  console.log('delete  trip');
});

// Export router
export default router;