const httpStatus = require('http-status');
const { Product } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a product
 * @param {Object} productBody
 * @returns {Promise<product>}
 */
const createProduct = async (productBody) => {
  
  return Product.create(productBody);
};

const queryProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id) => {
  return Product.findById(id);
};

const updateProductById = async (productId, updateBody) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

module.exports = {
  createProduct,
  getProductById,
  updateProductById,
  queryProducts
};

