const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { travelRequestService } = require('../../services');

const createTravelRequest = catchAsync(async (req, res) => {
  console.log('controller', req.body);
  const request = await travelRequestService.createTravelRequest(req.body);
  console.log('Travel request', request);
  res.status(httpStatus.CREATED).send(request);
});

const getTravelRequests = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await travelRequestService.queryTravelRequests(filter, options);
  res.send(result);
});

const getTravelRequest = catchAsync(async (req, res) => {
  const request = await travelRequestService.getTravelRequestById(req.params.requestId);

  if (!request) {
    throw new ApiError(httpStatus.NOT_FOUND, 'request not found');
  }
  res.send(request);
});

const updateTravelRequest = catchAsync(async (req, res) => {
  const request = await travelRequestService.updateTravelRequestById(req.params.requestId, req.body);
  res.send(request);
});

const deleteTravelRequest = catchAsync(async (req, res) => {
  await travelRequestService.deleteTravelRequestById(req.params.requestId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTravelRequest,
  getTravelRequests,
  getTravelRequest,
  updateTravelRequest,
  deleteTravelRequest,
};
