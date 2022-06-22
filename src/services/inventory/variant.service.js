const httpStatus = require('http-status');
const { Variant } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Variant
 * @param {Object} variantBody
 * @returns {Promise<Variant>}
 */
const createVariant = async (variantBody) => {

  return Variant.create(variantBody);
};

const queryVariants = async () => {
  const variants = await Variant.find();
  return variants;
};

const getVariantById = async (id) => {
  return Variant.findById(id);
};

const updateVariantById = async (variantId, updateBody) => {
  const variant = await Variant.findById(variantId);
  if (!variant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Variant not found');
  }
  Object.assign(variant, updateBody);
  await variant.save();
  return variant;
};

module.exports = {
  createVariant,
  getVariantById,
  updateVariantById,
  queryVariants
};

