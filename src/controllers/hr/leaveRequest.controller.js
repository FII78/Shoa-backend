const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { leaveRequestService } = require('../../services');

const createLeaveRequest = catchAsync(async (req, res) => {
  console.log('controller', req.body);
  const request = await leaveRequestService.createLeaveRequest(req.body);
  console.log('Leave request', request);
  res.status(httpStatus.CREATED).send(request);
});

const getLeaveRequests = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await leaveRequestService.queryLeaveRequests(filter, options);
  res.send(result);
});

const getLeaveRequest = catchAsync(async (req, res) => {
  const request = await leaveRequestService.getLeaveRequestById(req.params.requestId);

  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  res.send(request);
});

const updateLeaveRequest = catchAsync(async (req, res) => {
  const request = await leaveRequestService.updateLeaveRequestById(req.params.requestId, req.body);
  res.send(request);
});

const deleteLeaveRequest = catchAsync(async (req, res) => {
  await leaveRequestService.deleteLeaveRequestById(req.params.requestId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequest,
  updateLeaveRequest,
  deleteLeaveRequest,
};
