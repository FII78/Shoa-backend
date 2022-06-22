const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { supplierValidation } = require('../../../validations');
const { supplierController } = require('../../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageSupplier'), validate(supplierValidation.createSupplier), supplierController.createSupplier)
  .get(auth('manageSupplier'), validate(supplierValidation.getSuppliers), supplierController.getSuppliers);

router
  .route('/:supplierId')
  .get(auth('manageSupplier'), validate(supplierValidation.getSupplier), supplierController.getSupplier)
  .patch(auth('manageSupplier'), validate(supplierValidation.updateSupplier), supplierController.updateSupplier);

module.exports = router;
