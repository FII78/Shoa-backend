const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createWork = {
  body: Joi.object()
};
const getWorks = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getWork = {
  params: Joi.object().keys({
    workId: Joi.custom(objectId),
  }),
};

const updateWork = {
  params: Joi.object().keys({
    workId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteWork = {
  params: Joi.object().keys({
    workId: Joi.custom(objectId),
  }),
};

module.exports = {
  createWork,
  getWorks,
  getWork,
  updateWork,
  deleteWork,
};
