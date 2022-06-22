const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    
  }),
};

const getItem = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
};

const getItems = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateItem = {
  params: Joi.object().keys({
    itemId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required()
    })
    .min(1),
};

module.exports = {
  createItem,
  getItem,
  updateItem,
  getItems,
};
