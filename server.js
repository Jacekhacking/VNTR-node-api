import express from 'express';
import { json, urlencoded } from 'express';

import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
