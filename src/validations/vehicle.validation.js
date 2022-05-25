const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createVehicle = {
  body: Joi.object().keys({
    name:Joi.string().required(),  
    type:Joi.string().required(),  
    model:Joi.string().required(),  
    yearofMan:Joi.date().required(),  
    noofcylinders:Joi.number().required(), 
    horsepower:Joi.number().required(), 
    cubicCapacity:Joi.number().required(), 
    color:Joi.string().required(),  
    carryingCapacity:Joi.number().required(),  
    status: Joi.string().required().valid('Active', 'Inactive'), 
    regNum:Joi.number().required(), 
    engineNum:Joi.number().required(), 
    ChassisNum:Joi.number().required(), 
    PlateNum:Joi.number().required()

  }),
};
const getVehicles = {
  query: Joi.object().keys({
    name: Joi.string(),
    model: Joi.string(),
    yearofMan:Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
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
  body: Joi.object()
    .keys({
    name:Joi.string(),  
    type:Joi.string(),  
    model:Joi.string(),  
    yearofMan:Joi.date(),  
    noofcylinders:Joi.number(), 
    horsepower:Joi.number(), 
    cubicCapacity:Joi.number(), 
    color:Joi.string(),  
    carryingCapacity:Joi.number(),  
    status: Joi.string().valid('Active', 'Inactive'), 
    regNum:Joi.number(), 
    engineNum:Joi.number(), 
    ChassisNum:Joi.number(), 
    PlateNum:Joi.number()
    })
    .min(1),
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
  deleteVehicle
};
