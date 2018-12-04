// server.js;
import express from 'express';
import Reflection from './api-endpoints/src/controllers/routes';
import RedFlag from './api-endpoints/src/controllers/incident';

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

app.post('/api/v1/redFlags', RedFlag.create);
app.get('/api/v1/redFlags', RedFlag.getAll);
app.get('/api/v1/redFlags/:id', RedFlag.getOne);
app.put('/api/v1/redFlags/:id', RedFlag.update);
app.delete('/api/v1/redFlags/:id', RedFlag.delete);

const port = 8000;
app.listen(port, () => {
  console.log('app running on port ', +port);
});