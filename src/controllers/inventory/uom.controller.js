const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { uomService } = require('../../services');
const pick = require('../../utils/pick');

const createUom = catchAsync(async (req, res) => {
  // const result = await UomService.queryUoms();
  // if (result.length == 0) {
  //   const Uom = await UomService.createUom(req.body);
  //   res.status(httpStatus.CREATED).send(item);
  // }

  const uom = await uomService.createUom(req.body);
  res.status(httpStatus.CREATED).send(uom);
});

const getUom = catchAsync(async (req, res) => {
  const uom = await uomService.getUomById(req.params.uomId);

  if (!uom) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Uom not found');
  }
  res.send(uom);
});

const getUoms = catchAsync(async (req, res) => {
  const result = await uomService.queryUoms();
  console.log(result[0]);
  res.send(result[0]);
});

const updateUom = catchAsync(async (req, res) => {
  const uom = await uomService.updateUomById(req.params.uomId, req.body);
  res.send(uom);
});

module.exports = {
  createUom,
    getUom,
    getUoms,
    updateUom,
};
