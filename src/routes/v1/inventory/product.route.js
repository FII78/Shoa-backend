const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { productValidation } = require('../../../validations');
const { productController } = require('../../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageProduct'), validate(productValidation.createProduct), productController.createProduct)
  .get(auth('manageProduct'), validate(productValidation.getProducts), productController.getProducts);

router
  .route('/:productId')
  .get(auth('manageProduct'), validate(productValidation.getProduct), productController.getProduct)
  .patch(auth('manageProduct'), validate(productValidation.updateProduct), productController.updateProduct);

module.exports = router;
