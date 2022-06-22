const httpStatus = require('http-status');
const { Designation } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Designation
 * @param {Object} designationBody
 * @returns {Promise<Designation>}
 */
const createDesignation = async (designationBody) => {
  
  return Designation.create(designationBody);
};

 
const queryDesignations = async (filter, options) => {
  const designation = await Designation.paginate(filter, options);
  return designation;
};

const getDesignationById = async (id) => {
  return Designation.findById(id);
};

const updateDesignationById = async (designationId, updateBody) => {
  const designation = await getDesignationById(designationId);
  if (!designation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'designation not found');
  }
  Object.assign(designation, updateBody);
  await designation.save();
  return designation;
};

const deleteDesignationById = async (designationId) => {
  const designation = await getDesignationById(designationId);
  if (!designation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'designation not found');
  }
  await designation.remove();
  return designation;
};

module.exports = {
  createDesignation,
  queryDesignations,
  getDesignationById,
  updateDesignationById,
  deleteDesignationById
 
};
