const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createEmployee = {
  body: Joi.object()
};
const getEmployees = {
  query: Joi.object().keys({
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    id: Joi.custom(objectId),
    sortBy: Joi.string(),
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
      middleName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.object(),
      telephone: Joi.object(),
      location: Joi.object(),
      dob: Joi.date(),
      doj: Joi.date(),
      user: Joi.custom(objectId),
      designation: Joi.custom(objectId),
      department: Joi.custom(objectId),
      branch: Joi.custom(objectId),
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
