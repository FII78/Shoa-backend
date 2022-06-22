const httpStatus = require('http-status');
const { Grv ,Supplier} = require('../../models');
const ApiError = require('../../utils/ApiError');
const logger = require('../../config/logger');
/**
 * Create a Grv
 * @param {Object} grvBody
 * @returns {Promise<Grv>}
 */
const createGrv = async (grvBody) => {

  const supplier = await Supplier.findById({_id: grvBody.supplier})
  logger.info(supplier,'supplier')
  const grv = await Grv.create(grvBody);
  supplier.grvId = grv._id;
  logger.info(grv._id,"grv Id");
  await supplier.save();
  return grv
};

const queryGrvs = async () => {
  const grvs = await Grv.find();
  return grvs;
};

const getGrvById = async (id) => {
  return Grv.findById(id);
};

const updateGrvById = async (grvId, updateBody) => {
  const grv = await Grv.findById(grvId);
  if (!grv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grv not found');
  }
  Object.assign(grv, updateBody);
  await grv.save();
  return grv;
};

module.exports = {
  createGrv,
  getGrvById,
  updateGrvById,
  queryGrvs
};

