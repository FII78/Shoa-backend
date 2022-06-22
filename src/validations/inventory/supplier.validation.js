const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createSupplier = {
  body: Joi.object()
};

const getSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.string().custom(objectId),
  }),
};

const getSuppliers = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateSupplier = {
  params: Joi.object().keys({
    supplierId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .min(1),
};

module.exports = {
  createSupplier,
  getSupplier,
  updateSupplier,
  getSuppliers,
};
