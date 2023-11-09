import express from 'express';
const router = express.Router();
import userRoutes from './users.js';
import tripsRoutes from './trips.js';
import userLists from './lists.js';

router.use('/trips', tripsRoutes);
router.use('/users', userRoutes);
router.use('/lists', userLists);

// fallback
router.get('/', async (req, res) => {
  console.log('hit api example');
  res.send('This is an example route');
});

// Export the router
export default router;
