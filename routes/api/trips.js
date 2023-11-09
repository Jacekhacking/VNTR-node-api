import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Get all trips');
  res.send('Get all Trips');
});
router.get('/:id', async (req, res) => {
  console.log('get single trip');
});

router.post('/', async (req, res) => {
  console.log('create single trip');
});

router.put('/:id', async (req, res) => {
  console.log('update single trip');
});

router.delete('/:id', async (req, res) => {
  console.log('delete  trip');
});

// Export router
export default router;
