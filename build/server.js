'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _incident = require('./api-endpoints/src/controllers/incident');

var _incident2 = _interopRequireDefault(_incident);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js;
var app = (0, _express2.default)();
// import Reflection from './api-endpoints/src/controllers/routes';

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' });
});
app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.post('/api/v1/redFlags', _incident2.default.create);
app.get('/api/v1/redFlags', _incident2.default.getAll);
app.get('/api/v1/redFlags/:id', _incident2.default.getOne);
app.put('/api/v1/redFlags/:id', _incident2.default.update);
app.delete('/api/v1/redFlags/:id', _incident2.default.delete);

var port = 8000;
app.listen(port, function () {
  console.log('app running on port ', +port);
});