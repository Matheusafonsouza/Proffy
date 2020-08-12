//imports
import express from 'express';
import cors from 'cors';

import routes from './routes';

//config
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//listen
app.listen(3333);