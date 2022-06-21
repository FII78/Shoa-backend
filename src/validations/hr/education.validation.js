const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createEducation = {
  body: Joi.object()
};
const getEducations = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getEducation = {
  params: Joi.object().keys({
    educationId: Joi.custom(objectId),
  }),
};

const updateEducation = {
  params: Joi.object().keys({
    educationId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteEducation = {
  params: Joi.object().keys({
    educationId: Joi.custom(objectId),
  }),
};

module.exports = {
  createEducation,
  getEducations,
  getEducation,
  updateEducation,
  deleteEducation,
};
