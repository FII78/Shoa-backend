const httpStatus = require('http-status');
const { Grv ,Employee} = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Grv
 * @param {Object} grvBody
 * @returns {Promise<Grv>}
 */
const createGrv = async (grvBody) => {
  // const employee = await Employee.findById({_id: grvBody.employee})
  // return Grv.create(grvBody);
  const grv = await Grv.create(grvBody);
  // employee.grv = grv;
  // await employee.save();
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

