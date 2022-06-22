const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createDepartment = {
  body: Joi.object()
};
const getDepartments = {
  query: Joi.object().keys({
    name: Joi.string(),
    head: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDepartment = {
  params: Joi.object().keys({
    departmentId: Joi.string().custom(objectId),
  }),
};

const updateDepartment = {
  params: Joi.object().keys({
    departmentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      head: Joi.string(),
      description: Joi.string(),
    })
    .min(1),
};

const deleteDepartment = {
  params: Joi.object().keys({
    departmentId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
