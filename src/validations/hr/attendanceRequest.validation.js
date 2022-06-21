const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createAttendanceRequest = {
  body: Joi.object()
};
const getAttendanceRequests = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getAttendanceRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

const updateAttendanceRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteAttendanceRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

module.exports = {
  createAttendanceRequest,
  getAttendanceRequests,
  getAttendanceRequest,
  updateAttendanceRequest,
  deleteAttendanceRequest,
};
