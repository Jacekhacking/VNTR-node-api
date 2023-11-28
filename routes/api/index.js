import express from 'express';
const router = express.Router();

import achievementRoutes from './achievements.js';
import listRoutes from './lists.js';
import tripsRoutes from './trips.js';
import tripAchievementRoutes from './tripAchievements.js';
import userRoutes from './users.js';
import userAchievementRoutes from './userAchievements.js';

router.get('/', async (req, res) => {
  res.send('Fallback Route');
});

router.use('/achievements', achievementRoutes);
router.use('/lists', listRoutes);
router.use('/trips', tripsRoutes);
router.use('/tripAchievements', tripAchievementRoutes);
router.use('/users', userRoutes);
router.use('/userAchievements', userAchievementRoutes);

export default router;