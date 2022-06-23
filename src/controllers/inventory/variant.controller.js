const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { variantService } = require('../../services');
const pick = require('../../utils/pick');

const createVariant = catchAsync(async (req, res) => {
  // const result = await variantService.queryvariants();
  // if (result.length == 0) {
  //   const variant = await variantService.createvariant(req.body);
  //   res.status(httpStatus.CREATED).send(item);
  // }

  const variant = await variantService.createVariant(req.body);
  res.status(httpStatus.CREATED).send(variant);
});

const getVariant = catchAsync(async (req, res) => {
  const variant = await variantService.getVariantById(req.params.variantId);

  if (!variant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'variant not found');
  }
  res.send(variant);
});

const getVariants = catchAsync(async (req, res) => {
  const result = await variantService.queryVariants();
  console.log(result[0]);
  res.send(result[0]);
});

const updateVariant = catchAsync(async (req, res) => {
  const variant = await variantService.updateVariantById(req.params.variantId, req.body);
  res.send(variant);
});

module.exports = {
  createVariant,
    getVariant,
    getVariants,
    updateVariant,
};
