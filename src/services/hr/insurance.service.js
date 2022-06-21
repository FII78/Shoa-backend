const httpStatus = require('http-status');
const { Insurance } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Insurance
 * @param {Object} insuranceBody
 * @returns {Promise<Insurance>}
 */
const createInsurance = async (insuranceBody) => {
  console.log("service", insuranceBody);
  return Insurance.insertMany(insuranceBody);
};

const queryInsurances = async (filter, options) => {
  const insurance = await Insurance.paginate(filter, options);
  return insurance.results;
};

const getInsuranceById = async (id) => {
  const insurance = Insurance.findById(id);
  return insurance;
};

const updateInsuranceById = async (insuranceId, updateBody) => {
    const insurance = await getInsuranceById(insuranceId);
    if (!insurance) {
      throw new ApiError(httpStatus.NOT_FOUND, 'insurance not found');
    }
    Object.assign(insurance, updateBody);
    await insurance.save();
  return result;
};

const deleteInsuranceById = async (insuranceId) => {
  const insurance = await getInsuranceById(insuranceId);
  if (!insurance) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Insurance not found');
  }
  await insurance.remove();
  return insurance;
};

module.exports = {
  createInsurance,
  queryInsurances,
  getInsuranceById,
  updateInsuranceById,
  deleteInsuranceById,
};
