const { Notification } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryNotifications = async (filter) => {
  const notifications = await Notification.find(filter);
  if (!notifications) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No notifications found');
  }
  return notifications;
};

/**
 * Create a user
 * @param {Object} notifBody
 * @returns {Promise<Notification>}
 */
const createNotification = async (notifBody) => {
  if (!notifBody) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Send correct notification');
  }

  const notification = await Notification.create(notifBody);
  return notification;
};

module.exports = {
  queryNotifications,
  createNotification
};
