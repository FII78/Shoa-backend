const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { variantValidation } = require('../../validations');
const { variantController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageVariant'), validate(variantValidation.createVariant), variantController.createVariant)
  .get(auth('manageVariant'), validate(variantValidation.getVariants), variantController.getVariants);

router
  .route('/:variantId')
  .get(auth('manageVariant'), validate(variantValidation.getVariant), variantController.getVariant)
  .patch(auth('manageVariant'), validate(variantValidation.updateVariant), variantController.updateVariant);

module.exports = router;


