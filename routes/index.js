import express from 'express';
const router = express.Router();

import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);
// fallback route
router.get('/', async (req, res) => {
  res.send('fallback route');
});

export default router;
