'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./src/controllers/routes');

var _routes2 = _interopRequireDefault(_routes);

var _incident = require('./src/controllers/incident');

var _incident2 = _interopRequireDefault(_incident);

var _intervention = require('./src/controllers/intervention');

var _intervention2 = _interopRequireDefault(_intervention);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js;
var app = (0, _express2.default)();
app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' });
});
app.get('/api/v1/reflections', _routes2.default.getAll);
app.post('/api/v1/reflections', _routes2.default.create);
app.get('/api/v1/reflections/:id', _routes2.default.getOne);
app.put('/api/v1/reflections/:id', _routes2.default.update);
app.delete('/api/v1/reflections/:id', _routes2.default.delete);

app.get('/api/v1/redFlags', _incident2.default.getAll);
app.get('/api/v1/redFlags/:id', _incident2.default.getOne);
app.post('/api/v1/redFlags', _incident2.default.create);
app.put('/api/v1/redFlags/:id', _incident2.default.update);
app.delete('/api/v1/redFlags/:id', _incident2.default.delete);

app.post('/api/v1/interventions', _intervention2.default.create);
app.get('/api/v1/interventions', _intervention2.default.getAll);
app.get('/api/v1/interventions/:id', _intervention2.default.getOne);
app.put('/api/v1/interventions/:id', _intervention2.default.update);
app.delete('/api/v1/interventions/:id', _intervention2.default.delete);

exports.default = app;