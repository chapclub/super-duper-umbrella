const express = require('express');
const api = express.Router();

const touchController = require('../controllers/touch');

api.get('/touch', (req, res) => {
  if (!req.body || !req.body.touchID) {
    res.status(400).send({ 'err': 'Bad body sent. Expected: {touchId: String}' });
  }
  const touchId = req.body.touchID;
  const { err, touch } = touchController.getTouch(touchId);
  if (err) res.status(500).send({ 'err': err });
  res.status(200).send({ 'touch': touch });
});

api.get('/touches', (req, res) => {
  const { err, touches } = touchController.getTouches();
  if (err) res.status(500).send({ 'err': err });
  res.status(200).send({ 'touches': touches });
});

api.post('/touch', (req, res) => {

})

api.post('/uptouch', (req, res) => {
  if (!req.body || !req.body.touchID) {
    res.status(400).send({ 'err': 'Bad body sent. Expected: {touchId: String}' });
  }
  const touchId = req.body.touchID;
  const { err, touch } = touchController.upTouch(touchId);
  if (err) res.status(500).send({ 'err': err });
  res.status(200).send(touch);
});

api.post('/downtouch', (req, res) => {
  if (!req.body || !req.body.touchID) {
    res.status(400).send({ 'err': 'Bad body sent. Expected: {touchId: String}' });
  }
  const touchId = req.body.touchID;
  const { err, touch } = touchController.downTouch(touchId);
  if (err) res.status(500).send({ 'err': err });
  res.status(200).send(touch);
});