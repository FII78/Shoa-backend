const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createUom = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    desc: Joi.string().required()
    
  }),
};

const getUom = {
  params: Joi.object().keys({
    uomId: Joi.string().custom(objectId),
  }),
};

const getUoms = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateUom = {
  params: Joi.object().keys({
    uomId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    type: Joi.string().required(),
    desc: Joi.string().required()
    })
    .min(1),
};

module.exports = {
  createUom,
  getUom,
  updateUom,
  getUoms,
};
