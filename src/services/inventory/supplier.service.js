const httpStatus = require('http-status');
const { Supplier } = require('../../models');
const ApiError = require('../../utils/ApiError');

/**
 * Create a Supplier
 * @param {Object} SupplierBody
 * @returns {Promise<Supplier>}
 */
const createSupplier = async (supplierBody) => {
  
  return Supplier.create(supplierBody);
};

const querySuppliers = async () => {
  const suppliers = await Supplier.find();
  return suppliers;
};

const getSupplierById = async (id) => {
  return Supplier.findById(id);
};

const updateSupplierById = async (supplierId, updateBody) => {
  const supplier = await Supplier.findById(supplierId);
  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Supplier not found');
  }
  Object.assign(supplier, updateBody);
  await supplier.save();
  return supplier;
};

module.exports = {
  createSupplier,
  getSupplierById,
  updateSupplierById,
  querySuppliers
};

