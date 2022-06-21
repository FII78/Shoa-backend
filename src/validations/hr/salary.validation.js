const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSalary = {
  body: Joi.object()
};

const getSalaries = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getSalary = {
  params: Joi.object().keys({
    salaryId: Joi.custom(objectId),
  }),
};

const updateSalary = {
  params: Joi.object().keys({
    salaryId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteSalary = {
  params: Joi.object().keys({
    salaryId: Joi.custom(objectId),
  }),
};

module.exports = {
  createSalary,
  getSalaries,
  getSalary,
  updateSalary,
  deleteSalary,
};
