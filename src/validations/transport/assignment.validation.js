const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createAssignment = {
  body: Joi.object(),
};

const getAssignments = {
  query: Joi.object().keys({
    name: Joi.string(),
    model: Joi.string(),
    yearofMan: Joi.date(),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getAssignment = {
  params: Joi.object().keys({
    vehicleId: Joi.string().custom(objectId),
  }),
};

const updateAssignment = {
  params: Joi.object().keys({
    assignmentId: Joi.required().custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteAssignment = {
  params: Joi.object().keys({
    assignmentId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createAssignment,
  getAssignments,
  getAssignment,
  updateAssignment,
  deleteAssignment,
};
