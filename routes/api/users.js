import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Get all users');
  res.send('Get all users route');
});

router.get('/login', async (req, res) => {
  console.log('login user');
  res.send('login route');
});

router.post('/signup', async (req, res) => {
  console.log(req.body);
  res.send('create new user');
});

// Export router
export default router;
