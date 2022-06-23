const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { supplierService } = require('../../services');
const pick = require('../../utils/pick');

const createSupplier = catchAsync(async (req, res) => {
  // const result = await supplierService.querysuppliers();
  // if (result.length == 0) {
  //   const supplier = await supplierService.createsupplier(req.body);
  //   res.status(httpStatus.CREATED).send(item);
  // }

  const supplier = await supplierService.createSupplier(req.body);
  res.status(httpStatus.CREATED).send(supplier);
});

const getSupplier = catchAsync(async (req, res) => {
  const supplier = await supplierService.getSupplierById(req.params.supplierId);

  if (!supplier) {
    throw new ApiError(httpStatus.NOT_FOUND, 'supplier not found');
  }
  res.send(supplier);
});

const getSuppliers = catchAsync(async (req, res) => {
  const result = await supplierService.querySuppliers();
  console.log(result[0]);
  res.send(result[0]);
});

const updateSupplier = catchAsync(async (req, res) => {
  const supplier = await supplierService.updateSupplierById(req.params.supplierId, req.body);
  res.send(supplier);
});

module.exports = {
  createSupplier,
    getSupplier,
    getSuppliers,
    updateSupplier,
};
