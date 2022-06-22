const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { productService } = require('../../services');
const pick = require('../../utils/pick');

const createProduct = catchAsync(async (req, res) => {
  // const result = await productService.queryproducts();
  // if (result.length == 0) {
  //   const product = await productService.createproduct(req.body);
  //   res.status(httpStatus.CREATED).send(item);
  // }

  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  res.send(product);
});

const getProducts = catchAsync(async (req, res) => {
  const result = await productService.queryProducts();
  console.log(result[0]);
  res.send(result[0]);
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProductById(req.params.productId, req.body);
  res.send(product);
});

module.exports = {
  createProduct,
    getProduct,
    getProducts,
    updateProduct,
};
