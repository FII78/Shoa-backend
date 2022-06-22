const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createGrv = {
  body: Joi.object()
  // body: Joi.object().keys({
  //   branchId: Joi.custom().required(),
  //   supplierId: Joi.custom().required(),
  //   contactNo: Joi.string().required(),
  //   itemCode: Joi.string().required(),
  //   date: Joi.string().required(),
  //   invoiceNo: Joi.number().required(),
  //   itemCode: Joi.string().required(),
    
  // }),
};

const getGrv = {
  params: Joi.object().keys({
    grvId: Joi.string().custom(objectId),
  }),
};

const getGrvs = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

const updateGrv = {
  params: Joi.object().keys({
    grvId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required()
    })
    .min(1),
};

module.exports = {
  createGrv,
  getGrv,
  updateGrv,
  getGrvs,
};
