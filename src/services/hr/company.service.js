const httpStatus = require('http-status');
const { Company } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Company
 * @param {Object} companyBody
 * @returns {Promise<Company>}
 */
const createCompany = async (companyBody) => {
  
  return Company.create(companyBody);
};

const getCompanyById = async (id) => {
  return Company.findById(id);
};

const updateCompanyById = async (companyId, updateBody) => {
  const company = await Company.findById(companyId);
  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Company not found');
  }
  Object.assign(company, updateBody);
  await company.save();
  return company;
};

module.exports = {
  createCompany,
  getCompanyById,
  updateCompanyById,
};
