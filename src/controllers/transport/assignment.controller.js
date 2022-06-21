const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { assignmentService } = require('../../services');

const createAssignment= catchAsync(async (req, res) => {
  const assignment = await assignmentService.createAssignment(req.body);
  res.status(httpStatus.CREATED).send(assignment);
});

const getAssignments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'model','yearofMan']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await assignmentService.queryAssignments(filter, options);
  res.send(result);
});

const getAssignment = catchAsync(async (req, res) => {
  const assignment = await assignmentService.getAssignmentById(req.params.assignmentId);
  
  if (!assignment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'assignment not found');
  }
  res.send(assignment);
});



const updateAssignment = catchAsync(async (req, res) => {
  const assignment = await assignmentService.updateAssignmentById(req.params.assignmentId, req.body);
  res.send(assignment);
});


const deleteAssignment = catchAsync(async (req, res) => {
  await assignmentService.deleteAssignmentById(req.params.assignmentId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createAssignment,
  getAssignments,
  getAssignment,
  updateAssignment,
  deleteAssignment,
};

