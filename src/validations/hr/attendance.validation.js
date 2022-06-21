const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createAttendance = {
  body: Joi.object()
};
const getAttendances = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getAttendance = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

const updateAttendance = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteAttendance = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

module.exports = {
  createAttendance,
  getAttendances,
  getAttendance,
  updateAttendance,
  deleteAttendance,
};
