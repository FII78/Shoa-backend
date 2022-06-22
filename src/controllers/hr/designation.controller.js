const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { designationService } = require('../../services');

const createDesignation = catchAsync(async (req, res) => {
  const designation = await designationService.createDesignation(req.body);
  res.status(httpStatus.CREATED).send(designation);
});

const getDesignations = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await designationService.queryDesignations(filter, options);
  console.log(result.results);
  res.send(result.results);
});

const getDesignation = catchAsync(async (req, res) => {
  const designation = await designationService.getDesignationById(req.params.designationId);
  
  if (!designation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'designation not found');
  }
  res.send(designation);
});



const updateDesignation = catchAsync(async (req, res) => {
  const designation = await designationService.updateDesignationById(req.params.designationId, req.body);
  res.send(designation);
});


const deleteDesignation = catchAsync(async (req, res) => {
  await designationService.deleteDesignationById(req.params.designationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDesignation,
  getDesignations,
  getDesignation,
  updateDesignation,
  deleteDesignation,
};

