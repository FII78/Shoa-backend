const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { userService, employeeService } = require('../../services');
const cloudinary = require("../../utils/cloudinary");

/**
 * Create a user
 * @param {Object} userbody
 * @returns {Promise<User>}
 */

const createUser = catchAsync(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Image not uploaded');
  }

  userbody = {
    password: req.body.password,
    role: req.body.role,
    image: result.secure_url,
    cloudinary_id: result.public_id,
    employee: req.body.employee
  }
  const user = await userService.createUser(userbody);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUserById(req.params.userId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const employee = await employeeService.getEmployeeById(result.employee);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }

  const user = {
    name: `${employee.firstName} ${employee.middleName}`,
    cloudinary_id: result.cloudinary_id,
    employee: result.employee,
    id: result.id,
    image: result.image,
    isEmailVerified: result.isEmailVerified,
    role: result.role,
  };

  res.send(user);
});


const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});


const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};