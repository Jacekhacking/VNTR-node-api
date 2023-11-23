import express from 'express';
const router = express.Router();

import userRoutes from './users.js';
import tripsRoutes from './trips.js';
import userLists from './lists.js';
import achievementRoutes from './achievements.js';
import userAchievementRoutes from './userAchievements.js';

router.use('/trips', tripsRoutes);
router.use('/users', userRoutes);
router.use('/lists', userLists);
router.use('/achievements', achievementRoutes);
router.use('/userAchievements', userAchievementRoutes);

// fallback
router.get('/', async (req, res) => {
  console.log('hit api example');
  res.send('This is an example route');
});

// Export the router
export default router;
