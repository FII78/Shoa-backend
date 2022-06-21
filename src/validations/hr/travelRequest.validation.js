const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createTravelRequest = {
  body: Joi.object()
};
const getTravelRequests = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getTravelRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

const updateTravelRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteTravelRequest = {
  params: Joi.object().keys({
    requestId: Joi.custom(objectId),
  }),
};

module.exports = {
  createTravelRequest,
  getTravelRequests,
  getTravelRequest,
  updateTravelRequest,
  deleteTravelRequest,
};
