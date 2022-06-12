const Joi = require('joi');
const { password, objectId } = require('../custom.validation');

const createEmployee = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    dob: Joi.date().required(),
  }),
};
const getEmployees = {
  query: Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    dob: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getEmployee = {
  params: Joi.object().keys({
    employeeId: Joi.string().custom(objectId),
  }),
};

const updateEmployee = {
  params: Joi.object().keys({
    employeeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      dob: Joi.date(),
    })
    .min(1),
};

const deleteEmployee = {
  params: Joi.object().keys({
    employeeId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
