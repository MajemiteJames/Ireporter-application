// server.js;
import express from 'express';
import Reflection from './src/controllers/routes';
import RedFlag from './src/controllers/incident';
import Intervention from './src/controllers/intervention';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' });
});
app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.get('/api/v1/redFlags', RedFlag.getAll);
app.get('/api/v1/redFlags/:id', RedFlag.getOne);
app.post('/api/v1/redFlags', RedFlag.create);
app.put('/api/v1/redFlags/:id', RedFlag.update);
app.delete('/api/v1/redFlags/:id', RedFlag.delete);

app.post('/api/v1/interventions', Intervention.create);
app.get('/api/v1/interventions', Intervention.getAll);
app.get('/api/v1/interventions/:id', Intervention.getOne);
app.put('/api/v1/interventions/:id', Intervention.update);
app.delete('/api/v1/interventions/:id', Intervention.delete);

export default app;
