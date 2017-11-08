const mongoose = require('mongoose');
const TouchModel = require('../models/touch');

module.exports = {
  getTouch: (touchId) => {
    TouchModel.findById(touchId)
      .then(touch => {
        return { err: null, touch: touch };
      })
      .catch(err => {
        return { err: err, touch: null };
      });
  },

  getTouches: () => {
    TouchModel.find({})
      .then(touches => {
        return { err: null, touches: touches };
      })
      .catch(err => {
        return { err: err, touches: null };
      });
  },

  postTouch: (touch) => {
    TouchModel.create(touch)
      .then(touch => {
        return { err: null, touch: touch };
      })
      .catch(err => {
        return { err: err, touch: touch };
      });
  },

  upTouch: (touchId) => {
    TouchModel.findByIdAndUpdate(touchId, { $inc: { tickles: 1 } })
      .then(touch => {
        return { touch: touch, err: null };
      })
      .catch(err => {
        return { touch: null, err: err };
      });

  },

  downTouch: () => {
    return TouchModel.findByIdAndUpdate(touchId, { $inc: { tickles: -1 } })
      .then(touch => {
        return { err: null, touch: touch };
      })
      .catch(err => {
        return { err: err, touch: null };
      });
  }

};