const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { workService } = require('../../services');

const createWork = catchAsync(async (req, res) => {
  console.log("req", req.body.body);
  var userbody = req.body.body;

  console.log('user body', userbody);

  const work = await workService.createWork(userbody);
  console.log('insurance', work);
  res.status(httpStatus.CREATED).send(work);
});

const getWorks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id']);
  const options = pick(req.query, ['sortBy', 'page']);
  const result = await workService.queryWorks(filter, options);
  res.send(result);
});

const getWork = catchAsync(async (req, res) => {
  const work = await workService.getWorkById(req.params.workId);

  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'work not found');
  }
  res.send(work);
});

const updateWork = catchAsync(async (req, res) => {
  const work = await workService.updateWorkById(req.params.workId, req.body);
  res.send(work);
});

const deleteWork = catchAsync(async (req, res) => {
  await workService.deleteWorkById(req.params.WorkId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWork,
  getWorks,
  getWork,
  updateWork,
  deleteWork,
};
