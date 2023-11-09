import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Get lists route');
  res.send('Get all Lists');
});

router.get('/:id', async (req, res) => {
  console.log(`get single list by id: ${req.params.id}`);
  res.send('Get single list ');
});

router.post('/', async (req, res) => {
  console.log('make new list');
});

router.put('/:id', async (req, res) => {
  console.log(`update list by id: ${req.params.id}`);
});

router.delete('/:id', async (req, res) => {
  console.log(`delete list by id: ${req.params.id}`);
});

// Export router
export default router;
