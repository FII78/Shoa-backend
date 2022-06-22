const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { itemService } = require('../../services');
const pick = require('../../utils/pick');

const createItem = catchAsync(async (req, res) => {
  // const result = await itemService.queryItems();
  // if (result.length == 0) {
  //   const item = await itemService.createItem(req.body);
  //   res.status(httpStatus.CREATED).send(item);
  // }

  const item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(item);
});

const getItem = catchAsync(async (req, res) => {
  const item = await itemService.getItemById(req.params.itemId);

  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'item not found');
  }
  res.send(item);
});

const getItems = catchAsync(async (req, res) => {
  const result = await itemService.queryItems();
  console.log(result[0]);
  res.send(result[0]);
});

const updateItem = catchAsync(async (req, res) => {
  const item = await itemService.updateItemById(req.params.itemId, req.body);
  res.send(item);
});

module.exports = {
    createItem,
    getItem,
    getItems,
    updateItem,
};
