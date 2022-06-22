const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { grvService } = require('../../services');
const pick = require('../../utils/pick');

const createGrv = catchAsync(async (req, res) => {

  const grv = await grvService.createGrv(req.body);
  res.status(httpStatus.CREATED).send(grv);
});

const getGrv = catchAsync(async (req, res) => {
  const grv = await grvService.getGrvById(req.params.grvId);

  if (!grv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Grv not found');
  }
  res.send(grv);
});

const getGrvs = catchAsync(async (req, res) => {
  const result = await grvService.queryGrvs();
  console.log(result[0]);
  res.send(result[0]);
});

const updateGrv = catchAsync(async (req, res) => {
  const grv = await grvService.updateGrvById(req.params.grvId, req.body);
  res.send(grv);
});

module.exports = {
  createGrv,
    getGrv,
    getGrvs,
    updateGrv,
};
