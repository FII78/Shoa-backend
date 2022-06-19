const httpStatus = require('http-status');
const { Branch } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Branch
 * @param {Object} branchBody
 * @returns {Promise<Branch>}
 */
const createBranch = async (branchBody) => {
  
  return Branch.create(branchBody);
};

 
const queryBranches = async (filter, options) => {
  const branch = await Branch.paginate(filter, options);
  return branch;
};

const getBranchById = async (id) => {
  return Branch.findById(id);
};

const updateBranchById = async (branchId, updateBody) => {
  const branch = await getBranchById(branchId);
  if (!branch) {
    throw new ApiError(httpStatus.NOT_FOUND, 'branch not found');
  }
  Object.assign(branch, updateBody);
  await branch.save();
  return branch;
};

const deleteBranchById = async (branchId) => {
  const branch = await getBranchById(branchId);
  if (!branch) {
    throw new ApiError(httpStatus.NOT_FOUND, 'branch not found');
  }
  await branch.remove();
  return branch;
};

module.exports = {
  createBranch,
  queryBranches,
  getBranchById,
  updateBranchById,
  deleteBranchById
 
};
