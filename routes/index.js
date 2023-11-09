// routes/index.js
import express from 'express';
const router = express.Router();
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

// fallback route
router.get('/', async (req, res) => {
  console.log('hit / example');
  res.send('This is an example route');
});

export default router;
