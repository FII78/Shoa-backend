const httpStatus = require('http-status');
const { Employee } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Employee
 * @param {Object} employeeBody
 * @returns {Promise<Vehicle>}
 */
const createEmployee = async (employeeBody) => {
  
  return Employee.create(employeeBody);
};

 
const queryEmployees = async (filter, options) => {
  const employee = await Employee.paginate(filter, options);
  return employee;
};

const getEmployeeById = async (id) => {
  return employee.findById(id);
};

const updateEmployeeById = async (employeeId, updateBody) => {
  const employee = await getVehicleById(employeeId);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }
  Object.assign(employee, updateBody);
  await employee.save();
  return employee;
};

const deleteEmployeeById = async (employeeId) => {
  const employee = await getVehicleById(employeeId);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }
  await employee.remove();
  return employee;
};

module.exports = {
  createEmployee,
  queryEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById
 
};
