const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createVariant = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    options: Joi.string().required(),
    desc: Joi.string().required(),
    
  }),
};

const getVariant = {
  params: Joi.object().keys({
    variantId: Joi.string().custom(objectId),
  }),
};

const getVariants = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateVariant = {
  params: Joi.object().keys({
    variantId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required()
    })
    .min(1),
};

module.exports = {
  createVariant,
  getVariant,
  updateVariant,
  getVariants,
};
