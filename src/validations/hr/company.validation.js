const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createCompany = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    abbreviation: Joi.string().required(),
    website: Joi.string().required(),
    telephone: Joi.string().required(),
    fax: Joi.string().required(),
    email: Joi.string().required(),
    date: Joi.date().required(),
  }),
};

const getCompany = {
  params: Joi.object().keys({
    companyId: Joi.string().custom(objectId),
  }),
};

const updateCompany = {
  params: Joi.object().keys({
    companyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        name: Joi.string().required(),
        abbreviation: Joi.string().required(),
        website: Joi.string().required(),
        telephone: Joi.string().required(),
        fax: Joi.string().required(),
        email: Joi.string().required(),
        date: Joi.date().required(),
    })
    .min(1),
};

module.exports = {
  createCompany,
  getCompany,
  updateCompany,
};
