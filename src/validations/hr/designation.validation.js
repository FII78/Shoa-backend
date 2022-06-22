const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createDesignation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    requiredSkills: Joi.string().required(),
  }),
};
const getDesignations = {
  query: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    requiredSkills: Joi.array(),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getDesignation = {
  params: Joi.object().keys({
    designationId: Joi.string().custom(objectId),
  }),
};

const updateDesignation = {
  params: Joi.object().keys({
    designationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        requiredSkills: Joi.array().required(),
    })
    .min(1),
};

const deleteDesignation = {
  params: Joi.object().keys({
    designationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDesignation,
  getDesignations,
  getDesignation,
  updateDesignation,
  deleteDesignation,
};
