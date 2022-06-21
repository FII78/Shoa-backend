const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { attendanceRequestService } = require('../../services');

const createAttendanceRequest = catchAsync(async (req, res) => {
  const request = await attendanceRequestService.createAttendanceRequest(req.body);
  console.log('attendance request', request);
  res.status(httpStatus.CREATED).send(request);
});

const getAttendanceRequests = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await attendanceRequestService.queryAttendanceRequests(filter, options);
  res.send(result);
});

const getAttendanceRequest = catchAsync(async (req, res) => {
  const request = await attendanceRequestService.getAttendanceRequestById(req.params.requestId);

  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  res.send(request);
});

const updateAttendanceRequest = catchAsync(async (req, res) => {
  const request = await attendanceRequestService.updateAttendanceRequestById(req.params.requestId, req.body);
  res.send(request);
});

const deleteAttendanceRequest = catchAsync(async (req, res) => {
  await attendanceRequestService.deleteAttendanceRequestById(req.params.requestId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAttendanceRequest,
  getAttendanceRequests,
  getAttendanceRequest,
  updateAttendanceRequest,
  deleteAttendanceRequest,
};
