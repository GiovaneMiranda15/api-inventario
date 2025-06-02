import express from 'express';

import usuarioRouter from './routes/usuarioRoute.js';
import unidadeRouter from './routes/unidadeRoute.js';
import setorRouter from './routes/setorRoute.js';
import inventarioRouter from './routes/inventarioRoute.js';

const app = express();

app.use(express.json());

app.use('/usuario', usuarioRouter);
app.use('/unidade', unidadeRouter);
app.use('/setor', setorRouter);
app.use('/inventario', inventarioRouter);

export default app;