const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { roles } = require('../../config/roles');

const notificationSchema = mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
    },
    role: [{
      type: String,
      enum: roles,
      trim: true,
    }],
  },
);

// add plugin that converts mongoose to json
notificationSchema.plugin(toJSON);
notificationSchema.plugin(paginate);

/**
 * @typedef Notification
 */
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
