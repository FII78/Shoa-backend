const httpStatus = require('http-status');
const { Item } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a item
 * @param {Object} itemBody
 * @returns {Promise<item>}
 */
const createItem = async (itemBody) => {
  
  return Item.create(itemBody);
};

const queryItems = async () => {
  const items = await Item.find();
  return items;
};

const getItemById = async (id) => {
  return Item.findById(id);
};

const updateItemById = async (itemId, updateBody) => {
  const item = await Item.findById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  Object.assign(item, updateBody);
  await item.save();
  return item;
};

module.exports = {
  createItem,
  getItemById,
  updateItemById,
  queryItems
};


 