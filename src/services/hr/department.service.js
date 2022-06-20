const httpStatus = require('http-status');
const { Department } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Department
 * @param {Object} departmentBody
 * @returns {Promise<Department>}
 */
const createDepartment = async (departmentBody) => {
  
  return Department.insertMany(departmentBody);
};

 
const queryDepartments = async (filter, options) => {
  const department = await Department.paginate(filter, options);
  return department;
};

const getDepartmentById = async (id) => {
  return Department.findById(id);
};

const updateDepartmentById = async (departmentId, updateBody) => {
  const department = await getDepartmentById(departmentId);
  if (!department) {
    throw new ApiError(httpStatus.NOT_FOUND, 'department not found');
  }
  Object.assign(department, updateBody);
  await department.save();
  return department;
};

const deleteDepartmentById = async (departmentId) => {
  const department = await getDepartmentById(departmentId);
  if (!department) {
    throw new ApiError(httpStatus.NOT_FOUND, 'department not found');
  }
  await department.remove();
  return department;
};

module.exports = {
  createDepartment,
  queryDepartments,
  getDepartmentById,
  updateDepartmentById,
  deleteDepartmentById
 
};
