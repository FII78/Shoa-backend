const httpStatus = require('http-status');
const { Uom } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Uom
 * @param {Object} UomBody
 * @returns {Promise<Uom>}
 */
const createUom = async (uomBody) => {
  
  return Uom.create(uomBody);
};

const queryUoms = async () => {
  const uoms = await Uom.find();
  return uoms;
};

const getUomById = async (id) => {
  return Uom.findById(id);
};

const updateUomById = async (uomId, updateBody) => {
  const uom = await Uom.findById(uomId);
  if (!uom) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Uom not found');
  }
  Object.assign(uom, updateBody);
  await uom.save();
  return uom;
};

module.exports = {
  createUom,
  getUomById,
  updateUomById,
  queryUoms
};

