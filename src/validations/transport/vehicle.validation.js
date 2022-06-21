const Joi = require('joi');
const { objectId } = require('../other/custom.validation');

const createVehicle = {
  body: Joi.object(),
};
const getVehicles = {
  query: Joi.object().keys({
    name: Joi.string(),
    model: Joi.string(),
    yearofMan: Joi.date(),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getVehicle = {
  params: Joi.object().keys({
    vehicleId: Joi.string().custom(objectId),
  }),
};

const updateVehicle = {
  params: Joi.object().keys({
    vehicleId: Joi.required().custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteVehicle = {
  params: Joi.object().keys({
    vehicleId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
};
