const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createBranch = {
  body: Joi.object().keys({
    branchManager: Joi.custom(objectId).required(),
    location: Joi.object().required(),
    telephone: Joi.object().required(),
    email: Joi.object().required(),
    type: Joi.string().required().valid('Supermarket', 'Inventory', 'Warehouse'),
  }),
};
const getBranches = {
  query: Joi.object().keys({
    branchManager: Joi.string(),
    location: Joi.object(),
    telephone: Joi.object(),
    email: Joi.object(),
    type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBranch = {
  params: Joi.object().keys({
    branchId: Joi.string().custom(objectId),
  }),
};

const updateBranch = {
  params: Joi.object().keys({
    branchId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      branchManager: Joi.string().required(),
      location: Joi.object().required(),
      telephone: Joi.object().required(),
      email: Joi.object().required(),
      type: Joi.string().required().valid('Supermarket', 'Inventory', 'Warehouse'),
    })
    .min(1),
};

const deleteBranch = {
  params: Joi.object().keys({
    branchId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBranch,
  getBranches,
  getBranch,
  updateBranch,
  deleteBranch,
};
