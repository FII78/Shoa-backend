const pick = require('../../utils/pick');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');
const { notifService } = require('../../services');

const getNotifications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['role']);
  if (!filter.role) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Role is needed');
  }
  const result = await notifService.queryNotifications(filter);
  res.send(result);
});

const addNotifications = catchAsync(async (req, res) => {
  const result = await notifService.addNotification(req.body);
  res.send(result);
});

const deleteNotifications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['role']);
  if (!filter.role) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Role is needed');
  }
  const result = await notifService.deleteNotifications(filter);
  res.send(result);
});

module.exports = {
  getNotifications,
  addNotifications,
  deleteNotifications
};


