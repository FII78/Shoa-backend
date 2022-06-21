const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { salaryService } = require('../../services');

const createSalary = catchAsync(async (req, res) => {
  console.log("req", req.body);
  var userbody = req.body;

  console.log('user body', userbody);

  const salary = await salaryService.createSalary(userbody);
  console.log('insurance', salary);
  res.status(httpStatus.CREATED).send(salary);
});

const getSalaries = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await salaryService.querySalaries(filter, options);
  res.send(result);
});

const getSalary = catchAsync(async (req, res) => {
  const salary = await salaryService.getSalaryById(req.params.salaryId);

  if (!salary) {
    throw new ApiError(httpStatus.NOT_FOUND, 'salary not found');
  }
  res.send(salary);
});

const updateSalary = catchAsync(async (req, res) => {
  const salary = await salaryService.updateSalaryById(req.params.salaryId, req.body);
  res.send(salary);
});

const deleteSalary = catchAsync(async (req, res) => {
  await salaryService.deleteSalaryById(req.params.salaryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSalary,
  getSalaries,
  getSalary,
  updateSalary,
  deleteSalary,
};
