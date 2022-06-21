const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { employeeService } = require('../../services');
const cloudinary = require('../../utils/cloudinary');

const createEmployee = catchAsync(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'File not uploaded');
  }

  var userbody = {};
  userbody = JSON.parse(req.body.body);

  console.log('user body', userbody);

  userbody.cv = result.secure_url;
  userbody.cloudinary_id = result.public_id;

  // userbody.map((item, i) => {
  //   item.cv = result.secure_url
  //   item.cloudinary_id = result.public_id
  // });

  const employee = await employeeService.createEmployee(userbody);
  res.status(httpStatus.CREATED).send(employee);
});

const getEmployees = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['firstName', 'middleName', 'lastName', 'email', 'id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await employeeService.queryEmployees(filter, options);
  res.send(result);
});

const getEmployee = catchAsync(async (req, res) => {
  const employee = await employeeService.getEmployeeById(req.params.employeeId);

  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'employee not found');
  }
  res.send(employee);
});

const updateEmployee = catchAsync(async (req, res) => {
  const employee = await employeeService.updateEmployeeById(req.params.employeeId, req.body);
  res.send(employee);
});

const deleteEmployee = catchAsync(async (req, res) => {
  await employeeService.deleteEmployeeById(req.params.employeeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
