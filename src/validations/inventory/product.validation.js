const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required()
    })
    .min(1),
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  getProducts,
};
