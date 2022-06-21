const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createLeaveRequest = {
  body: Joi.object()
};
const getLeaveRequests = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getLeaveRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

const updateLeaveRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteLeaveRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

module.exports = {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequest,
  updateLeaveRequest,
  deleteLeaveRequest,
};
