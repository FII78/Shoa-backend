const httpStatus = require('http-status');
const { Salary } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Salary
 * @param {Object} salaryBody
 * @returns {Promise<Salary>}
 */
const createSalary = async (salaryBody) => {
  console.log("service", salaryBody);
  return Salary.insertMany(salaryBody);
};

const querySalaries = async (filter, options) => {
  const salary = await Salary.paginate(filter, options);
  return salary.results;
};

const getSalaryById = async (id) => {
  const salary = Salary.findById(id);
  return salary;
};

const updateSalaryById = async (salaryId, updateBody) => {
    const salary = await getSalaryById(salaryId);
    if (!salary) {
      throw new ApiError(httpStatus.NOT_FOUND, 'salary not found');
    }
    Object.assign(salary, updateBody);
    await salary.save();
  return result;
};

const deleteSalaryById = async (workId) => {
  const salary = await getSalaryById(salaryId);
  if (!salary) {
    throw new ApiError(httpStatus.NOT_FOUND, 'salary not found');
  }
  await salary.remove();
  return salary;
};

module.exports = {
  createSalary,
  querySalaries,
  getSalaryById,
  updateSalaryById,
  deleteSalaryById,
};
