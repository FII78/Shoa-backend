const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createInsurance = {
  body: Joi.object()
};
const getInsurances = {
  query: Joi.object().keys({
    employee: Joi.custom(objectId),
    sortBy: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getInsurance = {
  params: Joi.object().keys({
    insuranceId: Joi.custom(objectId),
  }),
};

const updateInsurance = {
  params: Joi.object().keys({
    insuranceId: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      insuranceType: Joi.string(),
      insuranceProvider: Joi.string(),
      agentName: Joi.string(),
      agentPhonenumber: Joi.string(),
      insuranceDocument: Joi.string(),
    })
    .min(1),
};

const deleteInsurance = {
  params: Joi.object().keys({
    insuranceId: Joi.custom(objectId),
  }),
};

module.exports = {
  createInsurance,
  getInsurances,
  getInsurance,
  updateInsurance,
  deleteInsurance,
};
