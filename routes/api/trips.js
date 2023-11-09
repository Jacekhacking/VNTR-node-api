import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Get all trips');
  res.send('Get all Trips');
});

// Export router
export default router;
